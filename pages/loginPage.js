var loginPage={
	elements: {  
 	username: function () {
 		return element(by.css('input[id="user_login"].input-xlarge'));
 	},
 	password:function () {
 		return element(by.css('input[id="user_password"].input-xlarge'));
 	},
 	submit:function () {
 		return element(by.css('div.input.action>input.btn.blue'));
 	}
 },
 isLoginPage: function(){
 	return browser.getCurrentUrl().then(function(url){
 		return url.indexOf("login");
 	});
 },

 signIn: function(login,pass) {  
 	this.elements.username().sendKeys(login);
 	this.elements.password().sendKeys(pass);
 	this.elements.submit().click();           
 }  

};
module.exports=loginPage;