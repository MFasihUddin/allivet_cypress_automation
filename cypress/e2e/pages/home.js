class Home{

    login(){
        this.goto();
        this.enterUserName();
        this.enterPassword();
        this.clickLoginButton();
    }

    goto() {
        cy.visit("https://www.saucedemo.com/");
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


export default Home;