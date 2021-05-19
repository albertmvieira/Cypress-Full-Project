/// <reference types="Cypress" />


describe('My alert test', function () {

    it('My second test case', function () {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        //Cypress sempre aceita os alertas por padrão. Se aparecer algum alert ele clica szinho em aceitar
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert -> consegue pegar informações da tela de alerta e armazenar. Não tem conceito de ter que fazer antes do cypress aceitar, pois ele aceita automaticamente.
        //window:confirm -> consegue pegar informações da tela de confirmção do alerta e armazena. Não tem conceito de ter que fazer antes do cypress aceitar, pois ele aceita automaticamente.
        cy.on('window:alert', (str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Cypress não consegue validar nativamente a abertura de outras abas do browser, por isso é necessário manipular o DOM da pagina para que abra na mesma pagina esta informação
        //invoke é uma função que possibilita utilizar JQuery functions, com isso utilizar o metodo/função removeAttr do jquery
        //removeAttr posibilita deletar atributos de um elemento no DOM da pagina

        cy.get('#opentab').invoke('removeAttr','target').click()

        //url get URL 
        //Should - realiza validações(Assert) "be" - verifica comportamento "have" verifica propriedades "include" - verifica se contem string asserção
        cy.url().should('include', 'rahulshettyacademy')

        //back or forward history page
        cy.go('back')

})
})