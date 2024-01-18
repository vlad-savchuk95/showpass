
import './commands';
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

const { registerCommand } = require('cypress-wait-for-stable-dom')
registerCommand()