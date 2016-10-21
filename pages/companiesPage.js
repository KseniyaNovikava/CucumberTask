const assert = require('assert');
var companiesPage = {
	elements: {
		search: function() {
			return element(by.css('div.dataTables_filter>label>input'));
		},
		companiesTable: function() {
			return element(by.css('table[id="tablesort"]'));
		},
		epam: function() {
			return element(by.css('td[data="EPAM"]>a'));
		},
	},
	findCompany: function(name) {
		_this = this;
		this.elements.search().sendKeys(name).then(function() {
			_this.elements.epam().click();
		});
	},
	isCompaniesTablePresent() {
		browser.isElementPresent(this.elements.companiesTable()).then(function(result) {
			assert(result);
		});
	}

};
module.exports = companiesPage;