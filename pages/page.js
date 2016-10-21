const assert = require('assert');
module.exports = {
        elements: {
            lentaBtn: element(by.css('a[title="Лента"]')),
            companyBtn: element(by.css('li>a[title="Компании"]')),
            salaryBtn: element(by.css('a[title="Зарплаты"]')),
            jobsBtn: element(by.css('a[title="Вакансии"]')),
            calendarBtn: element(by.css('a[title="Календарь"]')),

            user: element(by.css('div.user-info>a:nth-child(1)')),
            signIn: element(by.css('a.a-sign-link'))
        },

        go: function(site) {
            browser.get(site);
            //browser.waitForAngular();  
        },
        isMainLogoVisible: function() {
            var EC = protractor.ExpectedConditions;
            return browser.wait(EC.visibilityOf(element(by.css("a.header-logo")), 5000));
        },
        isTitleContains: function(title) {
            // var EC = protractor.ExpectedConditions;
            // return browser.wait(EC.titleIs(title), 7000);
             browser.getTitle().then(function(pageTitle) {
            assert.equal(pageTitle, title);
        });

        },
        navigateToSignInPage: function() {
            this.elements.signIn.click();
        },
        isMainPage: function() {
            return browser.getCurrentUrl().then(function(url) {
                return url === "https://dev.by/";
            });
        },
        navigateToUserPage:function() {
            this.elements.user.click();
        },
        navigateToCompaniesPage:function(){
          return  this.elements.companyBtn.click();

        }



        };