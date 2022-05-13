/ <reference types="cypress" />
describe('automationpractice', () => {
    beforeEach(() =>{
     cy.visit('http://automationpractice.com')
    } );


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

    //overit hlasku: 'No result were found for your search' 
        cy.get('#center_column')
        .find('p')
        .should('contain.text', 'No results were found for your search')

    //kliknut na logo a overit zalozky WOMEN, DRESSES T-SHIRTS
    
        cy.get('#header_logo').click()
        cy.get('.sf-with-ul')
        .should('have.length', 4)
        
        const titles = ['Women', 'Dresses', 'T-shirts']
        titles.forEach ( title => {
            cy.contains(title).should('have.text', title);
        });
    });
    //stranka je otvorena v casti beforeeach
    //kliknut na Sign in a overit Authentication
   
    
    it('Sign in_Sign out', () => {
    //zavolam funkciu pre prihlasenie, zadaj parametre
    //email:
    //heslo:
    Sing_in('marianna.durechova@ness.com', 'Itwillbefine')
    //Overenie, ze login bol uspesny My credit slips
        cy.get('a[href = "http://automationpractice.com/index.php?controller=order-slip"]')
        .should('be.visible')
        .should('contain.text', 'My credit slips')
    //Overenie, ze login bol uspesny, My wishlist
        cy.get('a[href = "http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist"]')
        .should('be.visible')
        .should('contain.text', 'My wishlists')
    //Overenie, ze login bol uspesny, my personal information
        cy.get('a[href = "http://automationpractice.com/index.php?controller=identity" ]')
        .should('be.visible')
        .should('contain.text', 'My personal information')
    //kliknut na Cart a overit ze ci je tam payment
        cy.get('a[href = "http://automationpractice.com/index.php?controller=order"')
        .contains('Cart')
        .click()

        cy.get('#order_step')
        .find('li')
        .should('have.length', 5)

    //.should('contain.text', 'Payment')
        const steps = ['Summary', 'Sign in', 'Address', 'Shipping', 'Payment']
        steps.forEach (step => {
            cy.contains(step).should('contain.text', step);
        });
    
    //Odhlasit sa a overit ze sign out zmizol
        cy.get('.logout').click()
        .should('not.exist')
    });



    it('Select and checked', () => {
    //Otvorit sekciu Women
        cy.get('#header_logo').click()
        cy.get('.sf-with-ul')
        .contains('Women')
        .click()
    //overit hodnoty v dropdown zozname Sort by
        cy.get('#uniform-selectProductSort')
        .click()
        const clothes_categories = ['Lowest first', 'Highest first', 'A to Z', 'Z to A', 'stock']
        clothes_categories.forEach ( one => {
        cy.contains(one, {force: true})  
        .should('contain.text', one)});

    //overit zobrazenie nejakych zaloziek
        cy.get('#center_column')
        .find('li')
        .should('not.empty')
        .should('be.visible')

    //zakliknut velkost L
        cy.get('#layered_id_attribute_group_3')
        .check()
        .should('be.checked')

    });



    it('pridat jeden a nasledne druhy produkt do Cart', () => {
        //overit ze Cart sa nachadza a je prazdna
        cy.get('a[href="http://automationpractice.com/index.php?controller=order"]')
        .should('contain.text', 'Cart')
        .should('contain.text', 'empty')

        //vybrat prvu polozku na stranke
        cy.get('#homefeatured')
        .find('li')
        .eq(0)
        .contains('Add to cart').click()
        cy.wait(10000)
        //overit zobrazenie potvrdenia a text Product successfully added to your shopping cart
        cy.get('#layer_cart')
        .should('be.visible')

        cy.get('#layer_cart')
        .find('h2')
        .should('contains.text', 'Product successfully added to your shopping cart')

        //kliknut Continue schopping
        cy.get('#layer_cart')
        .contains('Continue shopping')
        .click()
        cy.wait(5000)

        //overit hodnotu Product v Cart 
        cy.get('a[href="http://automationpractice.com/index.php?controller=order"]')
        .should('contain.text', 'Product')


        //pridat dalsi produkt a v Cart overit Products
        cy.get('#homefeatured')
        .find('li')
        .eq(1)
        .contains('Add to cart').click()
        cy.wait(5000)

        cy.get('#layer_cart')
        .contains('Continue shopping')
        .click()
        cy.wait(5000)

        cy.get('a[href="http://automationpractice.com/index.php?controller=order"]')
        .should('contain.text', 'Products')
        
        });

   
    





    function Sing_in(email,passwd) {
        cy.get('.login').click()
        cy.get('#center_column')
        .find('h1.page-heading')
        .should('have.text', 'Authentication')
    //vpisat Email a Password
        cy.get('#email').type(email)
        cy.get('#passwd').type(passwd)
    //potvrdit prihlasenie
        cy.get('#SubmitLogin').click()
    }
    });