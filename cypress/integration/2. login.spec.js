describe('Authenticate user', () => {
  it('log user into application', () => {
    cy.visit('/login');
    cy.get('[type="text"]').clear();
    cy.get('[type="text"]').type('cypress@makeitdone.online');
    cy.get('[type="password"]').clear();
    cy.get('[type="password"]').type('p@@ssword');
    cy.get('[type="submit"]').click();
    cy.url().should('include', '/home');
    cy.saveLocalStorage();
  });
});
