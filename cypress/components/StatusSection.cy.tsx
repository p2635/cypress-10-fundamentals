import React from 'react'
import '../../src/App.css'
import { StatusSection } from '../../src/components/layout/StatusSection'

describe('StatusSection', () => {
  beforeEach('renders', () => {
    cy.mount(
      // paddingTop to work around whole view being blocked for mobile
      <div className='innercontainer' style={{ paddingTop: '30px' }}>
        <StatusSection />
      </div>
    )
  })

  it('mistakes mode and fast mode are off by default', () => {
    cy.get('.status__action-mistakes-mode input').should('not.be.checked')
    cy.get('.status__action-fast-mode input').should('not.be.checked')
  })

  it('check mistakes mode is on when clicked', () => {
    cy.get('.status__action-mistakes-mode').click()
    cy.get('.status__action-mistakes-mode input').should('be.checked')
  })

  it('check fast mode is on when clicked', () => {
    cy.get('.status__action-fast-mode').click()
    cy.get('.status__action-fast-mode input').should('be.checked')
  })

  it('screenshot iphone-x size', () => {
    cy.viewport('iphone-x')
    cy.screenshot()
  })

  it('screenshot ipad-2 size', () => {
    cy.viewport('ipad-2')
    cy.screenshot()
  })

})