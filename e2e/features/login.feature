Feature: As a USER. I want to be able to make a login at my Tabara Flight App.

  @Withdraw
  Scenario Outline: I want to make a valid login
    Given that the user typed the home screem
    And went to the login screen
    When the user type the '<username>' at the username field
    And the user type the '<password>' at the password field
    Then he needs to receive a valid notification that he made the login

    Examples:
      | username           | password              |
      | marques_pombal | capararica            |
      | ichigo         | bankai1               |
      | darth_vader    | deathStart            |
      | palpatine      | phanthon_menace_rules |
      | luke_skywalker | whosmydaddy           |
      | leia_organa    | imnotsexysymbol |
      
  @Withdraw
  Scenario Outline: I want to make a invalid login
    Given that the user typed the home screem
    And went to the login screen
    When the user type the wrong '<username>' at the username field
    And the user type the wrong '<password>' at the password field
    Then he needs to receive a invalid notification that he made the login

    Examples:
      | username          | password            |
      | carlos_blanka | eletrocuteEverybody |
      | ryu 		  | hadouken            |
      | ken           | shoryuken           |
      | chewbaca      | aaahhhnnnnnnnn      |
