
// describe('Test1', () => {
//     it('verify Login title is display',()=>{
//         cy.visit("https://opensource-demo.orangehrmlive.com/")
//         cy.get('.orangehrm-login-title').should('be.visible').and('contain', 'Login')
//     })

    describe('Test1', () => {
        it('verify user Login successfully',()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com");
            cy.get('[name="username"]').type('Admin');
            cy.get('[name="password"]').type('admin123');
            cy.get('.orangehrm-login-button').click();
            cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible').and('contain', 'Dashboard');
        })

})