describe('Project Manager', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('/projects');
  });
  it('creates new project', () => {
    cy.get('div').contains('Add Project').click();
    cy.get('[placeholder="Project title"]').clear();
    cy.get('[placeholder="Project title"]').type('TestingCypress');
    cy.get('[placeholder="Add a description"]').clear();
    cy.get('[placeholder="Add a description"]').type('TestingDescription');
    cy.get('[type="submit"]').click();
    cy.get('div').contains('TestingCypress').should('exist');
  });
  it('edits project name', () => {
    cy.get('#editProject').click();
    cy.get('[placeholder="Project title"]').type(' [edited]');
    cy.get('[type="submit"]').click();
    cy.get('div').contains('TestingCypress [edited]').should('exist');
  });
  it('assigns task into new project', () => {
    cy.visit('/home');
    cy.get('[placeholder="Add new task"]').clear();
    cy.get('[placeholder="Add new task"]').type('Cypress testing task');
    cy.get('#setProject').click();
    cy.get('li>p').contains('TestingCypress [edited]').click();
    cy.get('[type="submit"]').click();
    cy.get('h3 + div p').should('include.text', 'TestingCypress [edited]');
  });
  it('renders tasks assigned into project', () => {
    cy.get('div').contains('TestingCypress [edited]').click();
    cy.get('#taskItem').should('exist');
  });
  it('indicates number of tasks assigned into project', () => {
    cy.get('div').contains('1').should('exist');
  });
  it('deletes testing project', () => {
    cy.get('#editProject').click();
    cy.get('button').contains('Delete').click();
    cy.get('#acceptButton').click();
    cy.get('div').contains('TestingCypress [edited]').should('not.exist');
  });
  it('cleans after testing task', () => {
    cy.visit('/home');
    cy.get('#taskItem').click();
    cy.get('#deleteTask').click();
    cy.get('#acceptButton').click();
    cy.get('#taskItem').should('not.exist');
  });
});
