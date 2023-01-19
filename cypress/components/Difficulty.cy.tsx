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
            <Difficulty onChange={cy.stub().as('change')} />
          </section>
        </div>
      </SudokuContext.Provider>
    )
  })

  it('Difficulty is Easy by default', () => {
    cy.get('select').should('have.value', 'Easy')
    cy.get('@change').should('not.have.been.called')
  })

  it('Selecting Medium from Easy', () => {
    cy.get('select').should('have.value', 'Easy').select('Medium')
    cy.get('select').should('have.value', 'Medium')
    cy.get('@change').should('have.been.calledOnce')
  })

  it('Printing the arguments of an element', () => {
    cy.get('select').should('have.value', 'Easy').select('Medium')
    cy.get('select').should('have.value', 'Medium')
    cy.get('@change').should('have.been.calledOnce').its('firstCall.args').then(console.log)
  })

})
