import { homepage } from "../../page/homepage"

describe('Various functionalities for a Bynder portal', () => {

  const homePageObj = new homepage();
  // Load the Application in browser before each scenario
  beforeEach(function() {
    homePageObj.launchApplication();
  });
  it.skip('Login and Logout Functionalities', () => {
    homePageObj.loginToApplication();
    homePageObj.logOutFromApplication();    
  })
  it.skip('Fill in a non-existing username and password', ()=>{
    homePageObj.loginToApplicationWithNonExistingUser();
  })
  // Verify the login page for both, when the field is blank and Submit button is clicked.
  it('Verify the login page for both, when the field is blank and Submit button is clicked', ()=>{
    homePageObj.loginToApplicationWithNoEnterUserNameAndPassword();
  })
})