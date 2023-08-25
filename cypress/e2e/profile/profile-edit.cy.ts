let profileId: string = "";

describe("user visits profile page", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login().then((user) => {
      profileId = user.id;
      cy.visit(`/profile/${profileId}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it("profile data is loaded", () => {
    cy.getByTestId("ProfileCard.firstname").should("have.value", "testor");
  });

  it("profile is edited", () => {
    const newFirstname = "new";
    const newLastname = "lastname";
    cy.updateProfile(newFirstname, newLastname);
    cy.getByTestId("ProfileCard.firstname").should("have.value", newFirstname);
    cy.getByTestId("ProfileCard.lastname").should("have.value", newLastname);
  });
});
