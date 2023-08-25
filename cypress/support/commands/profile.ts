export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
  cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: "PUT",
    url: "http://localhost:8000/profile/" + profileId,
    headers: { Authorization: "Yep" },
    body: {
      id: "4",
      first: "testor",
      lastname: "testerovich",
      age: 35,
      currency: "RUB",
      country: "Russia",
      city: "St.Petersburg",
      username: "test",
      avatar: "https://i.imgur.com/lzpIrMo.png",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile: (firstname: string, lastname: string) => Chainable<void>;
      resetProfile: (profileId: string) => Chainable<void>;
    }
  }
}
