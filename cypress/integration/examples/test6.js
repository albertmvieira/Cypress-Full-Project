/// <reference types="Cypress" />


describe('Mouse Hover test', function () {

    it('Mouse Hover test case', function () {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        //show = metodo jquery invocado através do invoke. aplicado no elemento pai do elemento escondido
        cy.get('.mouse-hover-content').invoke('show')
        //contains procura um elemento que contém o texto
        cy.contains('Top').click()
        cy.url().should('include','top')

})

    it('Force Click hidden element test case', function () {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        //contains procura um elemento que contém o texto
        //click({force: true}) = força o clique em elementos escondidos
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

})
})