Feature: Login
    I want to make a login to learn BDD

    Scenario: Success Case
        Given I am on login page
        WhenS I type "danilo@bdd.com" in the e-mail field
        And I type "parangaricotirimiruaro" in the password field
        And I press the "Submit" button
        Then I receive a notification that the login was successful

    Scenario: User or Password are wrong
        Given I am on login page~
        When I type "danilo@bdd.com" in the e-mail field
        And I type "pernambuco" in the password field
        And I press the "Submit" button
        Then I receive a notification that the login was unccessful

