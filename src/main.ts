import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { ItemListComponent } from './app/catalog/components/item-list/item-list.component'

@Component({
	selector: 'app-root',
	template: `
		<h1>Hello from {{ name }}!</h1>
		<div><item-list /></div>
	`,
	imports: [ItemListComponent],
})
export class App {
	name = 'Rolled Alloys'
}

bootstrapApplication(App)
