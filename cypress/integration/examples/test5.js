/// <reference types="Cypress" />


describe('Table test', function () {

    it('Tables test case', function () {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")

        //each = foreach. Encontrar um elemento no array armazenando na variavel texto 
        //nth-child(2) css-jquery que vai pegar sempre a segunda td encontrada dentro da tr
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const texto = $e1.text()
            if (texto.includes("Python")) {
                //eq pega um elemento de um index especifico do array
                //next = vai para o proximo elemente que é irmão do elemento identificado
                //Para utilizar comandos não cypress junto com cypress é necessário utilizar o then(Permite que você trabalhe com o assunto gerado pelo comando / promessa anterior.)
                //Cypress é assincrono, desta forma os comandos não são executados na ordem, internamente o cypress os coloca em ordem para execução, mas se perde quando tem comando não cypress no meio
                //dentro de function foi criado um novo webelement com o nome price que armazena toda informação anterior (elemento array com o index indo para o elemento irmão)
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
        

})
})