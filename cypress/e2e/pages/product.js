class Product{

    product_adding_and_removing(){
        this.addToCartButton();
        this.removeFromCart();
    }

    addItem_and_navigateToCart(){
        this.addToCartButton();
        this.navigation_to_cartPage();
    }

    navigation_to_cartPage(){
        cy.get('[data-test="shopping-cart-link"]').click();
    }

    addToCartButton(){
        cy.get("#add-to-cart-sauce-labs-backpack").click();
    }

    removeFromCart() {
        cy.get("#remove-sauce-labs-backpack").click();
    }

}

export default Product;