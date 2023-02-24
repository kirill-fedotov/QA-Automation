const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        reporter: 'mochawesome',
        setupNodeEvents(on, config) {
        },
    },
});
