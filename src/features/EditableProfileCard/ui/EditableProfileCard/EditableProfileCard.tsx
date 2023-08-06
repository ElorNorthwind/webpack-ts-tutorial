import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { useSelector } from "react-redux";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { VStack } from "@/shared/ui/Stack";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ProfileCard } from "@/entities/Profile";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { fetchProfileData } from "../../model/service/fetchProfileData/fetchProfileData";
import { ValidateProfileError } from "../../model/const/const";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string | number) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  const data = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isloading = useSelector(getProfileIsLoading);
  const readOnly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { t } = useTranslation("profile");
  const validateErrorTranslations = {
    [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("Отсутствует имя или фамилия"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Не указана страна"),
    [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    [ValidateProfileError.NO_DATA]: t("Нет данных"),
  };
  const reducers: ReducersList = {
    profile: profileReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap={"16"} max className={classNames("", {}, [className])}>
        <EditableProfileCardHeader />
        <ProfileCard
          data={data}
          error={error}
          isLoading={isloading}
          readOnly={readOnly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              theme={TextTheme.ERROR}
              text={validateErrorTranslations[err]}
              key={err}
              data-testid={"EditableProfileCard.Error"}
            />
          ))}
      </VStack>
    </DynamicModuleLoader>
  );
});
