import { Numbers } from '../../src/components/Numbers'
import { SudokuContext } from '../../src/context/SudokuContext'
import '../../src/App.css'
import { Difficulty } from '../../src/components/Difficulty'

describe('Difficulty', () => {

  beforeEach(() => {
    cy.mount(
      <SudokuContext.Provider value={{ difficulty: 'easy' }}>
        <div className='innercontainer'>
          <section className='status'>
            <Difficulty onChange={cy.stub().as('changeDifficultyEvent')} />
          </section>
        </div>
      </SudokuContext.Provider>
    )
  })

  it('Difficulty is Easy by default', () => {
    cy.get('select').should('have.value', 'Easy')
    cy.get('@changeDifficultyEvent').should('not.have.been.called')
  })

  it('Selecting Medium from Easy', () => {
    cy.get('select').should('have.value', 'Easy').select('Medium')
    cy.get('select').should('have.value', 'Medium')
    cy.get('@changeDifficultyEvent').should('have.been.calledOnce')
  })

  it('console.log event args', () => {
    cy.get('select').should('have.value', 'Easy').select('Medium')
    cy.get('select').should('have.value', 'Medium')
    cy.get('@changeDifficultyEvent').should('have.been.calledOnce')
      .its('firstCall.args.0.target.value')
      .then(cy.log)
  })

  it('Selected value is `Medium`', () => {
    cy.get('select').should('have.value', 'Easy').select('Medium')
    cy.get('select').should('have.value', 'Medium')
    cy.get('@changeDifficultyEvent').should('have.been.calledOnce')
      .its('firstCall.args.0.target.value')
      .should('equal', 'Medium')
  })
})
