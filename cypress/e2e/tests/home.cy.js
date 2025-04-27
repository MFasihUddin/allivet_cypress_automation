import Home from "../pages/home";
import Product from "../pages/product";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import CheckoutOverview from "../pages/checkoutOverview";

const home = new Home();
const product = new Product();
const cart = new Cart();
const checkout = new Checkout();
const checkoutoverview = new CheckoutOverview();

describe('Test1', () => {
    it('verify the site is accessible',()=>{
        home.goto();
        cy.get('[class="login_logo"]').should('contain','Swag Labs');
        
    })

    it('verify the login functionility',()=>{
        home.login();
        cy.get("[data-test='title']").should('be.visible');   
    })


    it('Verify Add to cart Functionality',()=>{
        home.login();
        product.addToCartButton();
        cy.get("#remove-sauce-labs-backpack").should('contain','Remove'); 
    })

    it('Verify Remove Item from Add to cart Functionality',()=>{
        home.login();
        product.product_adding_and_removing();
        cy.get("#add-to-cart-sauce-labs-backpack").should('contain','Add to cart'); 
    })

    it('Verify Remove Item from the cart',()=>{
        home.login();
        product.addItem_and_navigateToCart();
        cart.removeFromCart();
        cy.get('[data-test="shopping-cart-link"]').should('contain',''); 
    })

    it('Verify Redirection to Home Page',()=>{
        home.login();
        product.navigation_to_cartPage();
        cart.continueShopping();
        cy.url().should('contain','inventory.html'); 
    })

    it('Verify navigation to checkout page',()=>{
        home.login();
        product.addItem_and_navigateToCart();
        cart.checkoutButton();
        cy.get("[data-test='title']").should('contain','Checkout: Your Information'); 
    })

    it('Verify navigation to checkout overview page',()=>{
        home.login();
        product.addItem_and_navigateToCart();
        cart.checkoutButton();
        checkout.navigationToCheckoutOverview()
        cy.get("[data-test='title']").should('contain','Checkout: Overview'); 
    })

    it('Verify redirect to cart page via cancel',()=>{
        home.login();
        product.addItem_and_navigateToCart();
        cart.checkoutButton();
        checkout.continue();
        checkoutoverview.cancel();
        cy.url().should('contain','cart.html'); 
    })

    it('Verify order placed functionality',()=>{
        home.login();
        product.addItem_and_navigateToCart();;
        cart.checkoutButton();
        checkout.navigationToCheckoutOverview();
        checkoutoverview.finish();
        cy.get("[data-test='complete-header']").should('contain','Thank you for your order!');
    });
})