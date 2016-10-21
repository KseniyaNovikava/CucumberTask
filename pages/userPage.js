const assert = require('assert');
var userPage = {
	elements: {
		username: function() {
			return element(by.css('div.input.data-login>div:nth-child(1)>div>strong'));
		},
		email: function() {
			return element(by.css('div.input.data-login>div:nth-child(2)>div>strong'));
		},
	},
	checkUserLoginInfo: function(login,email) {  
		this.elements.username().getText().then(function(name){
			assert.equal(login,name,"! UserInfo username");
		});
		this.elements.email().getText().then(function(mail){
			assert.equal(mail,email,"! UserInfo email");
		});

		
	}

};
module.exports = userPage;