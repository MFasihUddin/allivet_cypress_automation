class Checkout {

    navigationToCheckoutOverview(){
        this.fillForm();
        this.continue();
    }

    continue(){
        cy.get("#continue").click();
    }

    fillForm(){
        cy.get("#first-name").type('Fasih');
        cy.get("#last-name").type('Uddin');
        cy.get("#postal-code").type('2500');
    }

}

export default Checkout;