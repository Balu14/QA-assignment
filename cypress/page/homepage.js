export class homepage {
username = '#inputEmail';
usenameValue = 'qa-assigment';
password = '#inputPassword';
passwordValue = 'PassWord!1';
loginbutton = '.login-btn';
dropDown = '#dropDown';
logout = '#logOut';
nonExistingUser = 'Tester'
warningMessageLocator = '.notification > h1';
warningMessage = 'You have entered an incorrect username or password.';
warningMessageForNoUserAndPassword = 'Please enter your password.';
signUp = '#signUp';
name = '#name'
nameValue = 'Abc'
email = '#email';
emailValue = 'abc@gmail.com'
signUpButton = '#signUpButton';
apiValue = 'button[value="Api"]'

launchApplication(){
    cy.visit('/');
}
launchTheMovieDB(){
    cy.visit('https://www.themoviedb.org/');
}
loginToApplication(){
cy.get(this.username).type(this.usenameValue);
cy.get(this.password).type(this.passwordValue);
cy.get(this.loginbutton).click();
}
loginToApplicationWithNonExistingUser(){
cy.get(this.username).type(this.nonExistingUser);
cy.get(this.password).type(this.passwordValue);
cy.get(this.loginbutton).click();
cy.get(this.warningMessageLocator).then(($ele)=>{
    const text = $ele.text();
    expect(text).to.equal(this.warningMessage);
})
}
loginToApplicationWithNoEnterUserNameAndPassword(){
cy.get(this.loginbutton).click();
cy.get(this.warningMessageLocator).then(($ele)=>{
    const text = $ele.text();
    expect(text).to.equal(this.warningMessageForNoUserAndPassword);
})
}
logOutFromApplication(){
cy.get(this.dropDown).click();
cy.get(this.logout).click();
}
signUp(){
cy.get(this.signUp).click();
cy.get(this.name).type(this.nameValue);
cy.get(this.email).type(this.emailValue);
cy.get(this.signUpButton).click();
}
getApi(){
    cy.get(this.apiValue).then(($ele)=>{
        const value = $ele.text();
        cy.request('https://www.themoviedb.org/'+ value).then((Response) => {
            expect(Response.status).to.eq(200);
            expect(Response.statusText).contains('OK');
    })
    })
}
}
