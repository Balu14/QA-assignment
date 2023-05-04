Feature: Invalid Login 
Scenario: Invalid Login Functionality
Given user navigates to the website wave-trial.getbynder.com.com
And there user logs in through Login Window by using Username as "Tester" and Password as "PassWord!1"
Then warning message should display for incorrect username or password.