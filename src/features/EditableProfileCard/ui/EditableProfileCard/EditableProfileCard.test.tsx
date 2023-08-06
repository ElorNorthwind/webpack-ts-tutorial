import { screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender/conponentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { Profile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { $api } from "@/shared/api/api";

const profile: Profile = {
  id: "1",
  first: "adminij",
  lastname: "adminoff",
  age: 101,
  currency: Currency.RUB,
  country: Country.Russia,
  city: "Moscow",
  username: "admin",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: "1", username: "admin" },
    },
  },
  asyncReducers: { profile: profileReducer },
};

describe("features/EditableProfileCard", () => {
  test("readonly switches to editable", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    expect(screen.getByTestId("EditableProfileCardHeader.SaveButton")).toBeInTheDocument();
  });
  test("cancel button discards changes", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "ivan");
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "nenastojashi");
    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("ivan");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("nenastojashi");
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.CancelButton"));
    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("adminij");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("adminoff");
  });
  test("an error message is shown on failed validation", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));
    expect(screen.getByTestId("EditableProfileCard.Error.Paragraph")).toBeInTheDocument();
  });
  test("a valid form sends put request", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));
    expect(mockPutReq).toHaveBeenCalled();
  });
});
