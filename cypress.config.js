
/// <reference types="@shelex/cypress-allure-plugin" />

const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
      on('file:preprocessor', cucumber());
      
      return config
    },
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",

   //2-
   specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{ js, jsx, ts, tsx }", "cypress/e2e/**/*.{feature,features}"],

  
    
  },
  

/// <reference types="@shelex/cypress-allure-plugin" />


 
});
