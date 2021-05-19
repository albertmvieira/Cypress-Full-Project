/// <reference types="Cypress" />

describe('Search', () => {

    const searchTerm = 'cypress.io'

    beforeEach(() => {
        cy.intercept(
            'GET',
            `**?q=${searchTerm}**`
        ).as('getSearchResults')

        cy.visit('https://duckduckgo.com')

        cy.get('input[type="text"]')
            .as('searchField')
            .should('be.visible')
    })

    it('Types and hits ENTER', () => {
        cy.get('@searchField')
            .type(`${searchTerm}{enter}`)

        cy.wait('@getSearchResults')

        cy.assertTenResultsPlusMoreResultsButton()
    })

    it('Types and clicks the magnifying glass button', () => {
        cy.get('@searchField')
            .type(searchTerm)
        cy.get('input[type="submit"]')
            .should('be.visible')
            .click()

        cy.wait('@getSearchResults')

        cy.assertTenResultsPlusMoreResultsButton()
    })


    it('Types and submits the form directly', () => {
        cy.get('@searchField')
            .type(searchTerm)
        cy.get('form').submit()

        cy.wait('@getSearchResults')

        cy.assertTenResultsPlusMoreResultsButton()
    })



})