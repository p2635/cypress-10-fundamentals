import '../../src/App.css'
import { Game } from '../../src/Game'
import { SudokuProvider } from '../../src/context/SudokuContext'
import { WinContext } from '../../src/context/WinContext'
import { start, solved } from '../fixtures/deterministic_test.json'

describe('Game', () => {

    beforeEach('renders', () => {

        window.start = start
        window.solved = solved

        cy.mount(
            <SudokuProvider>
                <WinContext.Provider value={{
                    won: false,
                    setWon: cy.stub().as('setWon')
                }}>
                    <Game />
                </WinContext.Provider>
            </SudokuProvider>
        )
    })

    it("Check sudoku grid uses test data, check 4 empty cells", () => {
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

        cy.get('@setWon').should('have.been.calledWith', true)
    })

})
