# Cypress Version 10: Fundamentals

[![CI](https://github.com/p2635/cypress-10-fundamentals/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/p2635/cypress-10-fundamentals/actions/workflows/ci.yml)

A clip of me trying stuff out:

https://user-images.githubusercontent.com/4522927/212367686-d3e0a6c1-0a50-4c54-8715-04bad43fbf3a.mov

This course was created by [Blazemeter University](https://www.blazemeter.com/university). I stumbled upon this course when [browsing resources to learn and practise Cypress](https://docs.cypress.io/examples/media/courses-media).

- Instructor: [Gleb Bahmutov, Ph.D.](https://github.com/bahmutov)
- Course Format:
  - Textual and video learning components
  - Six knowledge checks
  - Exam (requires score of 80% or higher).
- Product under test: React Sudoku game created by Amith Raravi ([repo](https://github.com/raravi/sudoku) and [live game demo](https://sudoku-raravi.vercel.app))

Course content:

- Set up Cypress and debug web apps, using capabilities such as time travel and real-time reload
- Controlling the page clock
- Network stubbing
- Screenshots of test failures
- Best practices for working with Cypress

# Full course breakdown

- [x] Setup: install cypress for a project (--save-dev)
- [x] E2E testing intro: check for h1 and h2 text with contains
- [x] Sudoku timer feature: configure timeout for a command, js for loop used in a test
- [x] Sudoku hint feature: .should(), .not, .each, .click
- [x] Sudoku play modes: alias, length, select, get by multiple classes
- [x] Clock: clock(), tick()
- [x] Optimizing sudoku app start using [start-server-and-test](https://github.com/bahmutov/start-server-and-test)
- [x] Continuous integration: GitHub Actions
- [x] Deterministic tests:  fixtures and modifying app code
- [x] Component testing: imports, cy.mount and change viewport height/width
- [x] Stub: cy.stub(), 'have.been.calledOnce', alias with HTML
- [x] Mount: cy.mount in the context of a React object
- [x] Viewport: cypress.config, log event args, assert value should equal
- [x] Screenshot: cy.screenshot, checking to see if input is 'checked'
- [x] Overlay: check the 'You solved it!' overlay
- [x] CI and component testing: adding component tests to GitHub actions
- [x] Top-level component: testing the Game component
- [ ] Context provider: controlling data and using stubs (STUCK HERE, DNF for now)
- [ ] Timer component testing
- [ ] Refactoring
- [ ] Test-driven development
- [ ] Intercept configuration
- [ ] Network call
- [ ] Watch-and-reload plugin
- [ ] Wrap-up
- [ ] Exam

Total estimated duration (course videos): 2 hours 15 minutes
