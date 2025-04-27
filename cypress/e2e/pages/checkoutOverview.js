class CheckoutOverview{

    cancel(){
        cy.get("#cancel").click();
    }

    finish(){
        cy.get("#finish").click();
    }

}

export default CheckoutOverview;