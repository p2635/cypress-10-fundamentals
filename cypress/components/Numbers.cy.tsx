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
  })
})
