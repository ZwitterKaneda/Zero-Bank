/// <reference types="cypress" />

describe('Practice Testing', () => {

    beforeEach('just login one time', () => {
        cy.Login();
    });

    it('test TransferFunds', () => {
        cy.TransferFunds();
    });

    it('test Paybills', () => {
        cy.Paybills();
    });
})