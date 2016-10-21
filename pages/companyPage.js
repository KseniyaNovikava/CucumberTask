const assert = require('assert');
var page = require('./page');
//var companyPage=Object.create(page);
var companyPage={
	elements: {
		email: function() {
			return element(by.css('a.email'));
		},
		site: function() {
			return element(by.css('a.url'));
		},
		// phone: function() {
		// 	return element(by.css('div.sidebar-views-h-contacts.card.vcard>ul>li:nth-child(2)>span'));
		// },
	},
	checkContacts: function(mail, phone, site) {
		this.elements.email().getText().then(function(companyMail) {
			assert.equal(companyMail, mail, "! Contacts: mail");
		});
		this.elements.site().getText().then(function(companySite) {
			assert.equal(site, companySite, "! Contacts: site");
		});
		// this.elements.phone().getText().then(function(companyPhone) {
		// 	assert.equal(phone, companyPhone, "! Contacts: phone");
		// });
	}

};
module.exports = companyPage;