/// <reference types="Cypress" />


describe('My second test suite', function () {

    it('My second test case', function () {
        cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findelement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        
        //alias 'as' substitui limitação de criação de variável(devido não ser comando cypress e se perder na hora que o cypress ordena por ser assincrono)
        cy.get('.products').as('productLocator')      
        //Encontrar um elemento no array pelo seu nome e clicar em um botão de sua estrutura
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').trigger('click')
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        //Neste ponto apresentou um erro de redirecionamento de pagina, cypress identificou uma falha de segurança ao mudar o dominio.
        //inserido seguinte trecho de codigo no cypress.json para corrigir..:
        //"chromeWebSecurity": true,
        //"modifyObstructiveCode": true,
        //"experimentalSourceRewriting":true
    })
})