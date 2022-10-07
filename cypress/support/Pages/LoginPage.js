/// <reference types="cypress" />
export class LoginPage{
    VisitAndLogin(){
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.get('.btn').click();
}
}