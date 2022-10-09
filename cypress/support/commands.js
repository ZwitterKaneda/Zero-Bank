// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('Login', ()=>{
    cy.session('loginstate',()=>{
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.get('.btn').click();
})
})

Cypress.Commands.add('TransferFunds', () =>{
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
})

Cypress.Commands.add('Paybills', ()=> {
    cy.visit('');
    cy.get('#online-banking').click();
    cy.get('#pay_bills_link').click();
    cy.get('#sp_payee').select('Apple');
    cy.get('#sp_account').select('Credit Card');
    cy.get('#sp_amount').type('575');
    cy.get('#sp_date').clear().type('2022-11-01{enter}');
    cy.get('#sp_description').type('Pay bills test');
    cy.get('#pay_saved_payees').click();
    cy.get('#alert_content').should('have.text', 'The payment was successfully submitted.');
})
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