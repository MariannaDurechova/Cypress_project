

it('name', ( )=> {
    cy.visit('https://www.mzv.sk/cestovanie_a_konzularne_info/registracia-pred-cestou-do-zahranicia?p_auth=M0p5JOjy&p_p_id=ExternalDangerAbroad_WAR_ExternalDangerAbroadPortlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_p_col_id=column-3&p_p_col_count=1&_ExternalDangerAbroad_WAR_ExternalDangerAbroadPortlet_command=showNewEformAction')

    cy.get('#dijit_form_Button_0').click();

    cy.get('#applicant_0_name').input('Marianna');

    cy.get('#applicant_0_surname').type('Dur')
    cy.get('#applicant_0_dateOfBirth').click()
      //.click()
      .type('28.2.1970');

    cy.get('#applicant_0_identityCardTypeRadioSelector1').check();

    cy.get('#applicant_0_identityCardNo').type('EX123123');

   // cy.get('#applicant_0_phoneTypeCode_0').click();

    cy.get('#applicant_0_phone_0').type('+420907097808')

    cy.contains('Mobil').click();

    cy.get('#applicant_0_email').type('marianna.durechova@gmail.com')

    cy.get('#registration_0_destinationCountry')
    .click()
    cy.get('#registration_0_destinationCountry_dropdown').contains('Bhután')
    .click()

    cy.get('#registration_0_tripStartDate')
    .click()
    .type('15.5.2022')
    cy.get('#registration_0_tripEndDate')
    .click()
    .type('30.6.2022')

    cy.get('#applicant_0_GDPR_1').check()
    cy.get('#applicant_0_GDPR_2').check()

    cy.get('#dijit_form_Button_15').click()


   // cy.get('#dijit_form_Button_2').click();

  });