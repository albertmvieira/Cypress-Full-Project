/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', function () {

    it('Demo Frames test case', function () {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        //frameLoaded = metodo da biblioteca cypress-iframe - utilizado para carregar um elemento iframe
        cy.frameLoaded("#courses-iframe")
        //iframe = metodo para fazer um switch para o iframe carregado
        //eq pega um elemento de um index especifico do array
        //find = pegar um elemento dentro do outro ja identificado com get.
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find(".pricing-title").should('have.length', 2)
    })
})