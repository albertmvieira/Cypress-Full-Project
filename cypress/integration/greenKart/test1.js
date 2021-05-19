/// <reference types="Cypress" />


describe('My first test suite', function () {

    it('My first test case', function () {
        cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findelement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        
        //alias 'as' substitui limitação de criação de variável(devido não ser comando cypress e se perder na hora que o cypress ordena por ser assincrono)
        cy.get('.products').as('productLocator')
        //Parent child chaining (Find procura apenas nos filhos do elemento encontrado no get)
        cy.get('@productLocator').find('.product').should('have.length', 4)
        //Clicando no botão com um nome especifico
        //eq pega um elemento de um index especifico do array
        //contains procura um elemento que contém o texto
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
       
        //Encontrar um elemento no array pelo seu nome e clicar em um botão de sua estrutura
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').trigger('click')
            }
        })

        //** Assert para verificar se texto do logo está correto*/
        cy.get('.brand').should('have.text', 'GREENKART')

        //**Printar no Log do cypress */

        //Para utilizar comandos não cypress junto com cypress é necessário utilizar o then(Permite que você trabalhe com o assunto gerado pelo comando / promessa anterior.)
        //Cypress é assincrono, desta forma os comandos não são executados na ordem, internamente o cypress os coloca em ordem para execução, mas se perde quando tem comando não cypress no meio
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
    })
})