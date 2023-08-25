// /// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import * as commonCommands from "./commands/common";
import * as profileCommands from "./commands/profile";
import * as articleCommands from "./commands/article";
import * as commentsCommands from "./commands/comments";
import * as ratingCommands from "./commands/rating";

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);
// Cypress.Commands.overwrite("intercept", () => {
//   const FIXTURE_MODE = process.env.FIXTURE_MODE;
//   const fistureName = req.METHOD + req.url + hash(req.body);
//   if (FIXTURE_MODE === "READ") {
//     readFixture();
//   }
//   if (FIXTURE_MODE === "WRITE") {
//     createFixture(fistureName, req.body);
//   }
//   if (FIXTURE_MODE === "API") {

//   }
// });

// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace Cypress {
//     interface Chainable {
//       // eslint-disable-next-line @typescript-eslint/method-signature-style
//       login(email?: string, password?: string): Chainable<void>;
//     }
//   }
// }

export {};
