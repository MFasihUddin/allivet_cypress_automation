class HomePage {

    goto() {
        cy.visit("https://www.saucedemo.com/");
    }
    
    login(){
        this.enterUserName();
        this.enterPassword();
        this.clickLoginButton();
    }

    enterUserName() {
        cy.get('#user-name').type('standard_user');
    }

    enterPassword(){
        cy.get('#password').type('secret_sauce');
    }

    clickLoginButton(){
        cy.get('#login-button').click();
    }
}


export default HomePage;