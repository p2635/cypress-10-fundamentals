import { values } from "cypress/types/lodash"
import { Timer } from "../../src/components/Timer"

describe('Timer', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  context('Lesson 1 - E2E', () => {

    beforeEach(() => {
      cy.visit('/')
    })

    it('Display from 00:01 to 0:09 every second', () => {
      for (let k = 0; k < 10; k++) {
        cy.contains('.status__time', `00:0${k}`, { timeout: 1200 })
      }
    })

    it('Display 00:10 within 11 seconds', () => {
      cy.contains('.status__time', '00:10', { timeout: 11_000 })
    })

  })

  context('Lesson 11 - Clock', () => {

    beforeEach(() => {
      cy.visit('/')
    })

    it('Freeze the clock and check 00:00 after 3 seconds', () => {
      cy.clock()
      cy.wait(3000)
      cy.contains('.status__time', '00:00')
    })

    // Better version of test 1
    it('Display from 00:01 to 0:09 every second (controlled test)', () => {
      cy.clock()
      for (let k = 0; k < 9; k++) {
        cy.contains('.status__time', `00:0${k}`)
        cy.tick(1000)
      }
    })

  })

})