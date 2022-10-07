/// <reference types="cypress" />
import { TransferFundsPage } from "../support/Pages/TransferFundsPage"
import { LoginPage } from "../support/Pages/LoginPage"
import { PayBillsPage } from "../support/Pages/PaybillsPage"

describe('Practice Testing', () => {

  const transferfundspage = new TransferFundsPage();
  const loginpage = new LoginPage();
  const paybillspage = new PayBillsPage();

  beforeEach('Login', () => {
    loginpage.VisitAndLogin();
  })

  it('Transfer Funds', () => {
    cy.visit('');
    transferfundspage.CompleteTransferFunds();
    transferfundspage.FinishAndassertion();

  });

  it('Pay Bills', () => {
    cy.visit('');
    paybillspage.CompletePaybillsPageForms();
    paybillspage.FinishAndassertion();


  });

});