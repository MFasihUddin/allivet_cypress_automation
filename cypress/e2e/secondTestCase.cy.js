describe('Test1', () => {
    it('verify title name', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })
})