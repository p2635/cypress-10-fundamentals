import React from 'react'
import '../../src/App.css'
import { Overlay } from '../fixtures/Overlay'

describe('Overlay', () => {

    it('is invisible', () => {
        cy.mount(<Overlay />)
        cy.get('.overlay').should('not.be.visible')
    })

    it('is visible', () => {
        cy.mount(<Overlay overlay={true} onClickOverlay={cy.stub().as('click')} />)
        cy.get('.overlay__text').should('have.text', 'You solved it!')
        cy.get('.overlay').should('be.visible').click()
        cy.get('@click').should('be.calledOnce')
    })

})