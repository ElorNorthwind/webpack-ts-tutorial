import { componentRender } from "@/shared/lib/tests/componentRender/conponentRender";
import AppRouter from "./AppRouter";
import { getRouteAbout, getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { screen } from "@testing-library/react";
import { UserRole } from "@/entities/User";

// workaound for TypeError: window.matchMedia is not a function
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("app/router/AppRouter", function () {
  test("page is rendered", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
    const page = await screen.findByTestId("AboutPage");
    expect(page).toBeInTheDocument();
  });

  test("page not found", async () => {
    componentRender(<AppRouter />, {
      route: "/blablabla",
    });
    const page = await screen.findByTestId("NotFoundPage");
    expect(page).toBeInTheDocument();
  });

  test("unauthorized user redirected to main page", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
    });
    const page = await screen.findByTestId("MainPage");
    expect(page).toBeInTheDocument();
  });

  test("authorized user can acces profile page", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
      initialState: {
        user: { _inited: true, authData: { id: "1" } },
      },
    });
    const page = await screen.findByTestId("ProfilePage");
    expect(page).toBeInTheDocument();
  });

  test("deny acces for a user without proper role", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: { id: "3" } },
      },
    });
    const page = await screen.findByTestId("ForbiddenPage");
    expect(page).toBeInTheDocument();
  });

  test("grant acces for a user with proper role", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: { id: "1", roles: [UserRole.ADMIN] } },
      },
    });
    const page = await screen.findByTestId("AdminPanelPage");
    expect(page).toBeInTheDocument();
  });
});
