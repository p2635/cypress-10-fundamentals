import { Numbers } from '../../src/components/Numbers'
import { SudokuContext } from '../../src/context/SudokuContext'
import '../../src/App.css'

describe('Numbers', () => {
  it('Show number options', () => {
    cy.mount(
      <div className='innercontainer'>
        <section className='status'>
          <Numbers />
        </section>
      </div>
    )
    cy.get('.status__number').should('have.length', 9)
  })

  it('Click on a number', () => {
    cy.mount(
      <div className='innercontainer'>
        <section className='status'>
          <Numbers onClickNumber={cy.stub().as('clickedNumber')} />
        </section>
      </div>
    )
    cy.get('.status__number').should('have.length', 9)
    cy.contains('.status__number', '1').click()
    cy.get('@clickedNumber').should('have.been.calledOnce', '1')
  })

  it('Shows the selected number', () => {

    for (let k = 1; k < 10; k++) {
      cy.mount(
        <SudokuContext.Provider value={{ numberSelected: `${k}` }}>
          <div className='innercontainer'>
            <section className='status'>
              <Numbers onClickNumber={cy.stub().as('clickedNumber')} />
            </section>
          </div>
        </SudokuContext.Provider>
      )
      cy.contains('.status__number', `${k}`).should(
        'have.class',
        'status__number--selected'
      )
    }

  })
})
