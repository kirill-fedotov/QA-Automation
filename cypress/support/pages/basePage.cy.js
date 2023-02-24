export class BasePage {

	uncaughtException() {
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false
		})
	}

}

export const basePage = new BasePage()