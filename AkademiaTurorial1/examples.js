/// <reference types="cypress" />

it('Akademia testing aplikacie', ( )=> {
  cy.visit('/kontakt')
 // cy.get('a[href="https://www.ness.sk/"]').click()
 cy.contains('Meno').click()


});