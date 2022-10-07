/// <reference types="cypress" />
export class PayBillsPage{
CompletePaybillsPageForms(){ 
    cy.get('#online-banking').click();
    cy.get('#pay_bills_link').click();
    cy.get('#sp_payee').select('Apple');
    cy.get('#sp_account').select('Credit Card');
    cy.get('#sp_amount').type('575');
    cy.get('#sp_date').clear().type('2022-11-01{enter}');
    cy.get('#sp_description').type('Pay bills test');
}
FinishAndassertion(){
    cy.get('#pay_saved_payees').click();
    cy.get('#alert_content').should('have.text', 'The payment was successfully submitted.');
}
}
