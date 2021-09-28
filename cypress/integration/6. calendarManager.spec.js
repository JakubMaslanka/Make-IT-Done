import moment from 'moment';

describe('Calendar Manager', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('/calendar');
  });
  it('redners current month', () => {
    cy.get('h2').should('have.text', moment().format('MMMM, YYYY'));
  });
  it('redners proper amount of calendar grids in current month', () => {
    cy.get('div').should('include.text', moment().daysInMonth());
  });
});
