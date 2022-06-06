//const { find } = require("cypress/types/lodash");
/ <reference types="cypress" />

before(() =>{
    cy.visit('http://ajtyvit-app.westeurope.cloudapp.azure.com:8080/index.php')
} );

describe('Akademia testing', () => {

    it.skip('main page', ()=> {

        cy.get('div.container-fluid')
        .find('li')
        .should('have.length', 5);

    const zalozky = ['Click me baby', 'Registracia', 'Kalkulacka', 'Odkazovac', 'Cyberpunk_registration']    
        zalozky.forEach( zalozka => {
            cy.contains(zalozka).should('have.text', zalozka);
        });
        //.should('have.text', 'Kalkulacka');
    });
  
    it('calculator', () => {
        cy.get('div.container-fluid')
        .contains('Kalkulacka')
        .click();
        
        cy.get('h1.text-center')
        .should('have.text', 'Kalkulacka');

        cy.get('.col-md-4_col-md-offset-1')
        //.find('div')
        //.find('div')
        //.should('have.length', 8);


    })
  });