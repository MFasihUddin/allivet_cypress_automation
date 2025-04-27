class Cart{

    removeFromCart() {
        cy.get("#remove-sauce-labs-backpack").click();
    }

    continueShopping(){
        cy.get("#continue-shopping").click();
    }

    checkoutButton(){
        cy.get("#checkout").click();
    }

}

export default Cart;