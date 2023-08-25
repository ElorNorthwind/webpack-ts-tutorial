export const createComment = (text: string) => {
  cy.getByTestId("AddCommentForm.Input").type(text);
  cy.getByTestId("AddCommentForm.Submit").click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      createComment: (text: string) => Chainable<void>;
    }
  }
}
