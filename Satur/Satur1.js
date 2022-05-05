/// <reference types="cypress" />

it('Satur Slovensko prazdniny', ( )=> {
    cy.visit('https://www.satur.sk/');
   // cy.get('a[href="https://www.ness.sk/"]').click()
   cy.contains('Destinácia, mesto alebo hotel')
   .click()
   .type('Slovensko')
   .click();

  
  
  });