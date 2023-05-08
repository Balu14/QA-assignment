import { homepage } from "../../page/homepage"

describe('Test Movie DB website', () => {

  const homePageObj = new homepage();
  // Load the Application in browser before each scenario
  beforeEach(function() {
    homePageObj.launchTheMovieDB();
  });
  it('Signup to Movie DB and get the api Response', () => {
        homePageObj.signUp();
        homePageObj.getApi();
  })
  })
