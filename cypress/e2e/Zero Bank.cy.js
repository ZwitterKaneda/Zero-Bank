/// <reference types="cypress" />
describe('Practice Testing', () => {

  beforeEach('Login', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.get('.btn').click();

  })

  it('Transfer Funds', () => {
    cy.visit('');
    cy.get('#transfer_funds_link').click();
    cy.get('#tf_fromAccountId').select('3');
    cy.get('#tf_toAccountId').select('2');
    cy.get('#tf_amount').type('500');
    cy.get('#tf_description').type('Test tranfer funds');
    cy.get('#btn_submit').click();
    cy.get('[value="Savings"]').should('be.visible');
    cy.get('#tf_toAccountId').should('be.visible');
    cy.get('#tf_amount').should('be.visible');
    cy.get('#btn_submit').click();
    cy.contains('You successfully submitted your transaction.').should('exist')
  });

  it('Pay Bills', () => {
    cy.visit('');
    cy.get('#online-banking').click();
    cy.get('#pay_bills_link').click();
    cy.get('#sp_payee').select('Apple');
    cy.get('#sp_account').select('Credit Card');
    cy.get('#sp_amount').type('575');
    //cy.get('#sp_date').invoke('val').then((text) => { expect('08/05/2019').to.equal(text) });

  });

});