/// <reference types="cypress" />
export class TransferFundsPage{
    CompleteTransferFunds(){
    cy.get('#transfer_funds_link').click();
    cy.get('#tf_fromAccountId').select('3');
    cy.get('#tf_toAccountId').select('2');
    cy.get('#tf_amount').type('500');
    cy.get('#tf_description').type('Test tranfer funds');
    cy.get('#btn_submit').click();
    cy.get('[value="Savings"]').should('be.visible');
    cy.get('#tf_toAccountId').should('be.visible');
    cy.get('#tf_amount').should('be.visible');
    }
    FinishAndassertion(){
    cy.get('#btn_submit').click();
    cy.contains('You successfully submitted your transaction.').should('exist')
}
}