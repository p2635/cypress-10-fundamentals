import { Numbers } from '../../src/components/Numbers'
import '../../src/App.css'

describe('Numbers', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
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
})
