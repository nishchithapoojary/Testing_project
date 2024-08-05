/// <reference types='Cypress'/>
describe('orangehrm', () => { //test collection
    it('login', () => { //single test case one describe can have multiple it block
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

    });
});