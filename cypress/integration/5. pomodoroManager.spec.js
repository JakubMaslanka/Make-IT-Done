describe('Pomodoro Manager', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('/pomodoro');
  });
  it('creates new task with pomodoro settings', () => {
    cy.visit('/home');
    cy.get('[placeholder="Add new task"]').clear();
    cy.get('[placeholder="Add new task"]').type('Cypress testing task');
    cy.get('#setPomodoro').click();
    cy.get('li>p').contains('4 Pomodoros').click();
    cy.get('[type="submit"]').click();
    cy.visit('/pomodoro');
    cy.get('h3').should('include.text', 'Cypress testing task');
  });
  it('changes pomodoro countdown intervals', () => {
    cy.get('#countdownSettings').click();
    cy.get('[name="work"]').clear();
    cy.get('[name="work"]').type('24');
    cy.get('[type="submit"]').click();
    cy.get('[aria-hidden="true"]').should('have.text', '24:00');
  });
  it('starts countdown', () => {
    cy.get('button').contains('START').click();
    cy.get('button').should('include.text', 'STOP');
    cy.get('[aria-hidden="true"]').should('not.include.text', '25:00');
  });
  it('skips countdown round', () => {
    cy.get('button').contains('START').click();
    cy.get('#skipRound').click();
    cy.get('[aria-hidden="true"]').should('have.text', '05:00');
  });
  it('checks if after four round is longer break', () => {
    cy.get('h3').click();
    cy.get('button').contains('START').click();
    cy.get('#skipRound').click();
    cy.get('button').contains('START').click();
    cy.get('#skipRound').click();
    cy.get('button').contains('START').click();
    cy.get('#skipRound').click();
    cy.get('button').contains('START').click();
    cy.get('#skipRound').click();
    cy.get('button').contains('START').click();
    cy.get('#skipRound').click();
    cy.get('button').contains('START').click();
    cy.get('#skipRound').click();
    cy.get('button').contains('START').click();
    cy.get('#skipRound').click();
    cy.get('[aria-hidden="true"]').should('have.text', '15:00');
  });
  it('checks if after finish est rounds task\'s marked as complete', () => {
    cy.get('[fill="#1BBC9B"]').should('exist');
    cy.get('span').should(($p) => {
      expect($p).to.have.length(3);
      expect($p.first()).to.contain('4');
      expect($p.last()).to.contain('4');
    });
  });
  it('cleans up after testing task', () => {
    cy.get('[fill="#128069"]').click();
    cy.get('#deleteTask').click();
    cy.get('#acceptButton').click();
    cy.get('h3').should('not.exist');
  });
});
