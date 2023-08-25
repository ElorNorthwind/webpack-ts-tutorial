import { Article } from "../../../src/entities/Article";

const defaultArticle = {
  title: "Testing Article",
  subtitle: "Nothing to see here, move along",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Trutovsky_001.jpg/1280px-Trutovsky_001.jpg",
  views: 1302,
  createdAt: "12.03.2023",
  userId: "1",
  type: ["science", "art"],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: "POST",
      url: "http://localhost:8000/articles",
      headers: { Authorization: "Yep" },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: "DELETE",
    url: "http://localhost:8000/articles/" + articleId,
    headers: { Authorization: "Yep" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle: (article?: Article) => Chainable<Article>;
      removeArticle: (articleId: string) => Chainable<void>;
    }
  }
}
