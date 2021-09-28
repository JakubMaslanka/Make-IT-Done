import moment from 'moment';

describe('Task Manager', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('/home');
  });
  it('shows skeleton element when data are fetching', () => {
    cy.get('.react-loading-skeleton').should('exist').and('have.length', 3);
    cy.get('p').should('have.text', moment().format('dddd, D MMM'));
  });
  it('shows proper current date', () => {
    cy.get('p').should('have.text', moment().format('dddd, D MMM'));
  });
  it('creates new task', () => {
    cy.get('[placeholder="Add new task"]').clear();
    cy.get('[placeholder="Add new task"]').type('Cypress testing task');
    cy.get('[type="submit"]').click();
    cy.get('#taskItem').should('have.text', 'Cypress testing task');
  });
  it('checks is task can be found from search bar', () => {
    cy.visit('/tasks');
    cy.get('[placeholder="I\'m looking for..."]').clear();
    cy.get('[placeholder="I\'m looking for..."]').type('Cypress testing task');
    cy.get('#taskItem').should('exist');
  });
  it('checks are "TasksNoFound" error was handled', () => {
    cy.visit('/tasks');
    cy.get('[placeholder="I\'m looking for..."]').type('[not found]');
    cy.get('#taskItem').should('not.exist');
    cy.get('h4').should('include.text', 'We searched everywhere, but we couldn\'t find the content you looking for.');
  });
  it('renders TaskEditor properly', () => {
    cy.get('#taskItem').click();
    cy.url().should('include', '/home/');
  });
  it('edits task title', () => {
    cy.get('#taskItem').click();
    cy.get('[value="Cypress testing task"]').type('[edited]');
    cy.get('#closeEditor').click();
    cy.get('#taskItem').should('include.text', '[edited]');
  });
  it('adds deadline and renders task details properly', () => {
    cy.get('#taskItem').click();
    cy.get('#setDate').click();
    cy.get('li>p').contains('Today').click();
    cy.get('#closeEditor').click();
    cy.get('h3 + div p').should('include.text', moment().format('ddd, D MMMM'));
  });
  it('adds establish count of pomodoro rounds', () => {
    cy.get('#taskItem').click();
    cy.get('#setPomodoro').click();
    cy.get('li>p').contains('1 Pomodoros').click();
    cy.get('#closeEditor').click();
    cy.get('h3 + div p').should('include.text', '0/1');
  });
  it('checks are NoProject error was handled', () => {
    cy.get('#taskItem').click();
    cy.get('#setProject').click();
    cy.get('div>p').should('include.text', 'There is no project that you can make an assigned task.');
  });
  it('marks task as complete', () => {
    cy.get('#taskUncomplete').click();
    cy.get('#taskComplete').should('exist');
  });
  it('deletes testing task', () => {
    cy.get('#showCompleted').click();
    cy.get('#taskItem').click();
    cy.get('#deleteTask').click();
    cy.get('#acceptButton').click();
    cy.get('#taskItem').should('not.exist');
  });
});
