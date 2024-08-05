/// <reference types='Cypress'/>
describe('herokuapp', () => { //test collection
    it('login', () => { //single test case one describe can have multiple it block
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        // cy.get('button[type="submit"]').click()
        cy.contains(' Login').click()
        cy.contains(' Logout').click()

    });
});