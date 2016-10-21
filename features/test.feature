#features/test.feature
Feature: Running Cucumber with Protractor
    As a user 
    I should be able to use dev.by site

     Scenario: Login
       Given I go to "https://dev.by/"
		Then the main logo should be visable
        When I navigate to the sign in page
        Then the main logo should be visable
        And I sign in with username "ksenia3", password "Dev678"
        Then I should be taken to the main page 

	 Scenario: Check user info
		When I navigate to the user page
		Then the main logo should be visable
		Then I check username "ksenia3" and email "ksu.novikova@gmail.com"

	Scenario: Open companies page
		When I navigate to the companies page
		Then the main logo should be visable
		Then the title  should be "Все компании | dev.by"
		And companies table should be on page


	Scenario: Find specific company
		When I navigate to the companies page
		Then the main logo should be visable
		And I search for company "epam" and navigate to the company's page
		Then the title  should be "EPAM | dev.by"


	Scenario: Сheck company contacts
		#When I go to the "epam" page
		Then I check contacts: mail "info@epam.com" phone"+375 (17) 3890100 " site "www.epam.by"




		


   


 






