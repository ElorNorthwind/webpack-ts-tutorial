let currentArticleId: string = "";

describe("article details spec", () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      cy.log(JSON.stringify(article));
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it("article detils are shown", () => {
    cy.getByTestId("ArticleDetails.Info").should("exist");
  });

  it("article recommendations list is shown", () => {
    cy.getByTestId("ArticleRecommendationsList").should("exist");
  });

  it("comment is being send", () => {
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("AddCommentForm").scrollIntoView();
    cy.createComment("this is a test comment");
    cy.getByTestId("CommentCard.Content").should("have.length", 1);
  });

  it("rating is being given", () => {
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(4, "this is a test feedback");
    cy.get("[data-selected=true]").should("have.length", 4);
  });

  it("rating example with fixtures", () => {
    cy.intercept("GET", "**/articles/*", { fixture: "article-details.json" });
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(4, "this is a test feedback");
    cy.get("[data-selected=true]").should("have.length", 4);
  });
});
