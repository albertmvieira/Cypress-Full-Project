/// <reference types="Cypress" />

describe('Validando API que integra a aplicação Web', function () {

    let message = 'whoa, this comment does not exist'

    beforeEach(function () {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Listen to GET Method API', function () {

        // Listen to GET to comments/1
        cy.intercept('GET', '**/comments/*').as('getComment')

        // we have code that gets a comment when
        // the button is clicked in scripts.js
        //coloquei wait para resolver problema de clicar duas vezes
        cy.wait(1000);
        cy.get('.network-btn').click()

        //precisei clicar duas vezes para dar certo
        //cy.get('.network-btn').click()


        // https://on.cypress.io/wait
        cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
    })

    it('Listen to POST Method API', function () {
        cy.intercept('POST', '**/comments').as('postComment')

        // we have code that posts a comment when
        // the button is clicked in scripts.js
        cy.wait(1000);
        cy.get('.network-post').click()
        cy.wait('@postComment').should(({ request, response }) => {
            expect(request.body).to.include('email')
            expect(request.headers).to.have.property('content-type')
            expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
        })
    })



    it('Fake response API - Mocking the response', function () {

        cy.intercept({
            method: 'PUT',
            url: '**/comments/*',
        }, {
            statusCode: 404,
            body: { error: message },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
        }).as('putComment')

        // we have code that puts a comment when
        // the button is clicked in scripts.js
        cy.wait(1000);
        cy.get(".network-put").click()

        //precisei clicar duas vezes para dar certo
        cy.get(".network-put").click()

        cy.wait('@putComment')

        cy.get('.network-put-comment').should('contain', message)

    })

})

