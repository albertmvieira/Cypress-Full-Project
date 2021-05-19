/// <reference types="Cypress" />

describe('Validando API pura - sem aplicação Web', function () {

    it('Database Interaction Test', function() {

        cy.sqlServer("Select * from Persons").then(function(result){
            console.log(result)
            expect(result[0][1]).to.equal('Vieira')
            expect(result[0][3]).to.equal('Londres')

        })
    })

})