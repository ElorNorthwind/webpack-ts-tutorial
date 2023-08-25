import { selectByTestId } from "cypress/helpers/selectByTestId";

describe("routing", () => {
  describe("user unauthorised", () => {
    it("opens main page", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("try to access profile page", () => {
      cy.visit("/profile/4");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("try to access non existant rout", () => {
      cy.visit("/i-dont-exist");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });

  describe("user authorised", () => {
    beforeEach(() => {
      cy.login();
    });
    it("open profile page", () => {
      cy.visit("/profile/4");
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });
    it("open article list", () => {
      cy.visit("/articles");
      cy.get(selectByTestId("ArticlesPage")).should("exist");
    });
  });
});
