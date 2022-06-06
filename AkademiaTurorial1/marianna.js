const { eq } = require("cypress/types/lodash");

/ <reference types="cypress" />

before(() =>{
    cy.visit('http://automationpractice.com')
} );

describe('automationpractice', () => {

    it('main page', ()=> {
        cy.get('#header_logo')
        .should('be.visible');
        //najst a vpisat hodnotu do vyhladavaca
        cy.get('#search_query_top')
        .type('xxxxxxxxxxxxxxxxxxxxxx')

        //kliknut vyhladat
        cy.get('#searchbox')
        .find('.btn')
        .click()

        //vyhladavacie okno nie je prazdne
        cy.get("#search_query form-control ac_input")
        .should('not.be.empty')

        //No result were found for your search 
        cy.get('#center_column')
        eq(1)



    });
  
    it.skip('xxx', () => {
        cy.get('xxx')


    })
  });