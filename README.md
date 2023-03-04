 QA-Automation tests for https://epicentrk.ua/

 Prerequisites

Before starting, make sure you have the following software installed on your machine:

    Node.js

    npm

Setup

   1. Clone the repository to VScode

    https://github.com/kirill-fedotov/QA-Automation.git

   2. Navigate to the root directory

    cd QA-Automation

   3. Install Cypress

    npm install cypress --save-dev

 Running Tests

   4. Start the Cypress Test Runner

    node_modules\.bin\cypress open

 Setup "cypress-mochawesome-reporter"

   5. Install cypress-mochawesome-reporter

    npm i --save-dev cypress-mochawesome-reporter

   6. Change cypress reporter & setup hooks

   Edit config file (cypress.config.js by default)

    const { defineConfig } = require('cypress');

    module.exports = defineConfig({
      reporter: 'cypress-mochawesome-reporter',
      e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
        },
      },
    });

   7. Add to cypress/support/e2e.js

    import 'cypress-mochawesome-reporter/register';

   8. Run cypress

    npx cypress run --spec cypress/e2e/signup_login.cy.js

   9. Run cypress with specific browser and in visible mode

    npx cypress run --spec cypress/e2e/signup_login.cy.js --browser chrome --headed
