import { start, solved } from '../fixtures/deterministic_test.json'

describe("Deterministic test with fixtures", () => {

    beforeEach("Check sudoku grid uses test data, check 4 empty cells", () => {
        cy.visit("/", {
            onBeforeLoad(window) {
                window.start = start
                window.solved = solved
            }
        })

        cy.get('.game__cell:contains(0)').should('have.length', 4)
    })

    it("Solve by filling in first four empty cells", () => {
        cy.get('.game__cell:contains(0)')
            .should('have.length', 4)

        start.forEach((cell, index) => {
            if (cell == '0') {
                cy.get('.game__cell').eq(index).click()
                cy.contains('.status__number', solved[index]).click()
            }
        })

        // Assert
        cy.contains('.overlay__text', 'You solved it').should('be.visible')
    })

})