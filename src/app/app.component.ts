import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { RouterModule, RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-root',
	template: ` <div class="p-2 p-lg-4 h-100"><router-outlet /></div> `,
	styles: ``,
	imports: [RouterOutlet, RouterModule],
})
export class App {}

bootstrapApplication(App)
