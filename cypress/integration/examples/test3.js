/// <reference types="Cypress" />


describe('My checkbox/dropdown/radio test suite', function () {

    it('My second test case', function () {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")

        //Check Box

        //para clicar em checkbos o metodo check() é mais confiavel que o click()
        //be.checked - 'be' verifica o comportamento 'checked' se esta selecionado
        //'have' verifica a propriedade 'value' - valor da propriedade value = option1
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])


        //Static DropDown
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic DropDown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text()==="India"){
                $e1.trigger('click')
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

        //Element hide(invisible)
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio button
        cy.get('[value="radio2"]').check().should('be.checked')
})
})