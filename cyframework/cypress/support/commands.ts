Cypress.Commands.add("clearThenType", { prevSubject: 'element' }, (subject, text, options?) => {
  cy.wrap(subject).type(`{selectAll}${text}`, options).type(`{selectAll}${text}`, options).type('{enter}').then(($el) => {
    expect($el.val()).to.equal(text);
    return cy.wrap($el);
  });      
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});