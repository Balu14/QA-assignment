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

launchApplication(){
    cy.visit('/');
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
}