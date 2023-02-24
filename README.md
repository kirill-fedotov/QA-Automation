# QA-Automation tests for https://epicentrk.ua/

Prerequisites

Before starting, make sure you have the following software installed on your machine:

    Node.js
    npm

Setup

1. Clone the repository that contains your Cypress tests.

    git clone <repository-url>

2. Navigate to the root directory of the repository.

    cd <repository-name>

3. Install Cypress and Mochawesome.

    npm install cypress mochawesome --save-dev

4. Update your cypress.config.js file with the following scripts:

    module.exports = defineConfig({
        reporter: 'mochawesome',
    })

Running Tests

5. Start the Cypress Test Runner.

    node_modules\.bin\cypress run --reporter mochawesome

This will merge all the Mochawesome JSON reports in the mochawesome-report folder and generate an HTML report in the same folder.

6. Open the mochawesome-report/mochawesome.html file in your web browser to view the report.