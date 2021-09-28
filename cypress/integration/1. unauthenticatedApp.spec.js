describe('Unauthenticated application', () => {
  it('renders landing page correctly', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'make****done');
    cy.get('button').should('be.visible');
  });

  it('redirect to login page correctly', () => {
    cy.visit('/');
    cy.get('button').should('have.text', 'Try it out!').click();
    cy.url().should('include', '/login');
  });

  it('redirect to register page correctly', () => {
    cy.visit('/login');
    cy.get('a').should('include.text', 'Register').click();
    cy.url().should('include', '/register');
  });

  it('handle invalid login credentials', () => {
    cy.visit('/login');
    cy.get('[type="text"]').clear();
    cy.get('[type="text"]').type('testTEST123');
    cy.get('[type="password"]').clear();
    cy.get('[type="password"]').type('p@ssword');
    cy.get('[type="submit"]').click();
    cy.get('div').should('include.text', 'Incorrect email or password.');
  });
});
