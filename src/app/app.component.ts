import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { ItemSelectComponent } from './catalog/components/item-select/item-select.component'
import { RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-root',
	template: ` <div class="container"><router-outlet /></div> `,
	styles: `
	.container {
		height: 100%;
	}
	`,
	imports: [RouterOutlet],
})
export class App {}

bootstrapApplication(App)
