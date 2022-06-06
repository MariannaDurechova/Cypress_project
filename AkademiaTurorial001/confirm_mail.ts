//import { easing } from "cypress/types/jquery";
//import { eq } from "cypress/types/lodash";

it.skip('mail', ()=> {
    cy.visit('https://courses.ultimateqa.com/users/sign_in');
    cy.get(".form__control")
    .eq(0)
    .type('anything1@jmn6kfx2.mailosaur.net')
    cy.get('.form__control')
    .eq(1)
    .type('Nekonecno*0154')
    cy.get('.form__control')
    .eq(2)
    .click()
    cy.get('.form__button-group')
    .click()
    cy.contains('Sign in').click();
});

it.only('testint_post', () => {
    cy.request({
        method: 'POST',
        url: 'https://mailosaur.com/api/messages/search?server=jmn6kfx2',
        headers: {
            Authorization: 'Basic ' + Buffer.from('NO9gYeKwPbHgKD7D').toString('base64')
        },
        body:{
            sentTo: 'anything1@jmn6kfx2.mailosaur.net',
            subject: "Your Ultimate QA course details."
        }
    
    }).then((res)=> {
        expect(res.body.items[0].subject).equal('Your Ultimate QA course details.')
      })
});