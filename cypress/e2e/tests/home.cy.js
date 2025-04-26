
describe('Test1', () => {
    it('verify the site is accessible',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.wait(3000);
        cy.get('[class="login_logo"]').should('contain','Swag Labs');
    })

    it('verify the login functionility',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get("[data-test='title']").should('be.visible');   
    })


    it('Verify Add to cart Functionality',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#remove-sauce-labs-backpack").should('contain','Remove'); 
    })

    it('Verify Remove Item from Add to cart Functionality',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.wait(5000);
        cy.get("#remove-sauce-labs-backpack").click()
        cy.get("#add-to-cart-sauce-labs-backpack").should('contain','Add to cart'); 
    })

    it('Verify Remove Item from the cart',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get("#remove-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').should('contain',''); 
    })

    it('Verify Redirection to Home Page',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get("#continue-shopping").click();
        cy.url().should('contain','inventory.html'); 
    })

    it('Verify navigation to checkout page',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get("#checkout").click();
        cy.get("[data-test='title']").should('contain','Checkout: Your Information'); 
    })

    it('Verify navigation to checkout overview page',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get("#checkout").click();
        cy.get("#first-name").type('Fasih');
        cy.get("#last-name").type('Uddin');
        cy.get("#postal-code").type('2500');
        cy.get("#continue").click();
        cy.get("[data-test='title']").should('contain','Checkout: Overview'); 
    })

    it('Verify redirect to cart pafe via cancel',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get("#checkout").click();
        cy.get("#continue").click();
        cy.get("#cancel").click();
        cy.url().should('contain','cart.html'); 
    })


    it('Verify order placed functionality',()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get("#checkout").click();
        cy.get("#first-name").type('Fasih');
        cy.get("#last-name").type('Uddin');
        cy.get("#postal-code").type('2500');
        cy.get("#continue").click();
        cy.get("#finish").click();
        cy.get("[data-test='complete-header']").should('contain','Thank you for your order!');
    })

    // describe('Test1', () => {
    //     it('verify user Login successfully',()=>{
    //         cy.visit("https://www.allivet.com");
    //         cy.get('[name="username"]').type('Admin');
    //         cy.get('[name="password"]').type('admin123');
    //         cy.get('.orangehrm-login-button').click();
    //         cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible').and('contain', 'Dashboard');
    //     })

})