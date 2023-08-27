describe("article list spec", () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit("articles");
    });
  });

  it("article list is rendered", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });

  it("test works on stubs (fixtures)", () => {
    cy.intercept("GET", "**/articles?*", { fixture: "articles.json" });
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });
});

export {};
