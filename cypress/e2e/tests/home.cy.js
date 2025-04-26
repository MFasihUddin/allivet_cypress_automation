import HomePage from "../pages/homepage";

const homePage = new HomePage();

describe('Test1', () => {
    it('verify the site is accessible',()=>{
        homePage.goto();
        cy.get('[class="login_logo"]').should('contain','Swag Labs');
        
    })

    it('verify the login functionility',()=>{
        homePage.goto();
        homePage.login();
        cy.get("[data-test='title']").should('be.visible');   
    })


    it('Verify Add to cart Functionality',()=>{
        homePage.goto();
        homePage.login();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#remove-sauce-labs-backpack").should('contain','Remove'); 
    })

    it('Verify Remove Item from Add to cart Functionality',()=>{
        homePage.goto();
        homePage.login();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.wait(5000);
        cy.get("#remove-sauce-labs-backpack").click()
        cy.get("#add-to-cart-sauce-labs-backpack").should('contain','Add to cart'); 
    })

    it('Verify Remove Item from the cart',()=>{
        homePage.goto();
        homePage.login();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get("#remove-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').should('contain',''); 
    })

    it('Verify Redirection to Home Page',()=>{
        homePage.goto();
        homePage.login();
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get("#continue-shopping").click();
        cy.url().should('contain','inventory.html'); 
    })

    it('Verify navigation to checkout page',()=>{
        homePage.goto();
        homePage.login();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get("#checkout").click();
        cy.get("[data-test='title']").should('contain','Checkout: Your Information'); 
    })

    it('Verify navigation to checkout overview page',()=>{
        homePage.goto();
        homePage.login();
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
        homePage.goto();
        homePage.login();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get("#checkout").click();
        cy.get("#continue").click();
        cy.get("#cancel").click();
        cy.url().should('contain','cart.html'); 
    })


    it('Verify order placed functionality',()=>{
        homePage.goto();
        homePage.login();
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