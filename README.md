# Cypress Version 10: Fundamentals

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
- [ ] Continuous integration with GitHub Actions
- [ ] Deterministic tests
- [ ] Component testing
- [ ] Stub
- [ ] Mount
- [ ] Viewport
- [ ] Screenshot
- [ ] Overlay
- [ ] CI and component testing
- [ ] Top-level component
- [ ] Context provider
- [ ] Timer component testing
- [ ] Refactoring
- [ ] Test-driven development
- [ ] Intercept configuration
- [ ] Network call
- [ ] Watch-and-reload plugin
- [ ] Wrap-up
- [ ] Exam

Total estimated duration (course videos): 2 hours 15 minutes
