import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
let userdata;
beforeEach(()=>{
   cy.fixture("testData").then((data)=>{
      userdata=data;
   })

   
})
Given('User enter login page of sauce lab',()=>{
  // cy.visit('https://www.saucedemo.com/')
   let url=Cypress.config().baseUrl;

   cy.visit(url)
})

When('User enter username {string}',(inputusername)=>{
  // cy.get('input#user-name').type('standard_user')
  inputusername= userdata.username
  cy.log(inputusername)
   cy.get('[name="username"]').type(inputusername)

})

When('User enter password {string}',(password)=>{

   //inputusername= userdata.password

   cy.get('[name="password"]').type(userdata.password)
   
})

Then('User click on login button',()=>{
   cy.get('.oxd-button').click()
   
})



When('user enter multiple data set and validate response',()=>{
   
cy.fixture('testData').then((data)=>{

  // let url=Cypress.config().baseUrl;

   //cy.visit(url)
   data.forEach((userdata)=> {
      cy.get('[name="username"]').type(userdata.Validusername)
      cy.get('[name="password"]').type(userdata.Validpassword)
      cy.get('.oxd-button').click()

     if(userdata.Validusername=='Admin' && userdata.Validpassword=='admin123'){
      cy.get('span.oxd-topbar-header-breadcrumb h6').invoke('text').then(function(text){
         
         expect(text).eq(userdata.expectedMessage)
         
     cy.get('span.oxd-userdropdown-tab i').click()
     cy.wait(1000)

     cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
     cy.wait(4000)
      })
     }
     else
     {
      cy.get('div.oxd-alert-content p').invoke('text').then(function(text){
         expect(text).eq(userdata.errorMessage)
      })
     }
   });

   })
})

   






Then('user should be logged into the application',()=>{

   //cy.get('.AppHeader-context-item')
   
   cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').invoke('text').then(function(homepage){
      expect(homepage).eq('Dashboard')
   })
   
   Then('user should be logged into the application and check the tile',()=>{
      cy.get('span.title').invoke('text').then(function(homepage){
         expect(homepage).eq('Product')
      })
})
})
