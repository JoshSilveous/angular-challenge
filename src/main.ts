import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'

@Component({
	selector: 'app-root',
	template: ` <h1>Hello from {{ name }}!</h1> `,
})
export class App {
	name = 'Rolled Alloys'
}

bootstrapApplication(App)
