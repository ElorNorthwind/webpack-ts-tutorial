export const setRate = (rating: number = 5, feedback: string = "this is a test feedback") => {
  cy.getByTestId(`StarRating.${rating}`).click();
  cy.getByTestId(`RatingCard.Input`).type(feedback);
  cy.getByTestId(`RatingCard.Submit`).click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate: (ating: number, feedback: string) => Chainable<void>;
    }
  }
}
