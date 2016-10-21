var Page = require('./../../pages/page');
var loginPage = require('./../../pages/loginPage');
var userPage = require('./../../pages/userPage');
var companiesPage = require('./../../pages/companiesPage');
var companyPage = require('./../../pages/companyPage');
module.exports = function() {

	this.Before(function() {
		browser.ignoreSynchronization = true;
	});
	this.Given(/^I go to "([^"]*)"$/, function(site) {
		return Page.go(site);
	});
	this.Then(/^the main logo should be visable$/, function() {
		return Page.isMainLogoVisible();
	});
	this.When(/^I navigate to the companies page$/, function() {
		return Page.navigateToCompaniesPage();
	});
	this.Then(/^companies table should be on page$/, function() {
		return companiesPage.isCompaniesTablePresent();
	});
	this.When(/^I search for company "([^"]*)" and navigate to the company's page$/, function(name) {
		return companiesPage.findCompany(name);
	});
	this.Then(/^the title  should be "([^"]*)"$/, function(title) {
		return Page.isTitleContains(title);
	});
	this.When(/^I go to the "([^"]*)" page$/, function(name) {
		Page.navigateToCompaniesPage().then(function() {
			companiesPage.findCompany(name);
		});
	});
	this.Then(/^I check contacts: mail "([^"]*)" phone"([^"]*)" site "([^"]*)"$/, function(mail, phone, site) {
		return companyPage.checkContacts(mail, phone, site);
	});
	this.When(/^I navigate to the sign in page$/, function() {
		return Page.navigateToSignInPage();
	});
	this.When(/^I sign in with username "([^"]*)", password "([^"]*)"$/, function(login, pass) {
		return loginPage.isLoginPage().then(loginPage.signIn(login, pass));
	});
	this.Then(/^I should be taken to the main page$/, function() {
		return Page.isMainPage();
	});
	this.When(/^I navigate to the user page$/, function() {
		return Page.navigateToUserPage();
	});
	this.Then(/^I check username "([^"]*)" and email "([^"]*)"$/, function(username, email) {
		return userPage.checkUserLoginInfo(username, email);
	});

};