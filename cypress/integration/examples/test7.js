/// <reference types="Cypress" />


describe('Child window', function () {

    it('Child window test case', function () {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        //Para utilizar comandos não cypress junto com cypress é necessário utilizar o then(Permite que você trabalhe com o assunto gerado pelo comando / promessa anterior.)
        //Cypress é assincrono, desta forma os comandos não são executados na ordem, internamente o cypress os coloca em ordem para execução, mas se perde quando tem comando não cypress no meio
        cy.get('#opentab').then(function(el){
           //'prop' = pegar o valor do atributo/propriedade
           const url = el.prop('href')
           cy.log(url)
           cy.visit(url)
           //não é possíve mudar para um outro dominio usando o metodo visit dentro do mesmo teste
           //necessário remover o atributo para acessar como no test5
        })
    })
})