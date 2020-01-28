var chai = require('chai'),
expect = chai.expect,
chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {
    Given('that the user typed the home screem', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Given('went to the login screen', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    When('the user type the wrong {string} at the username field', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    When('the user type the wrong {string} at the password field', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('he needs to receive a invalid notification that he made the login', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
});