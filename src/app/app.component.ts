import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { ItemSelectComponent } from './catalog/components/item-select/item-select.component'
import { RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-root',
	template: `
		<div class="container">
			<div class="content"><router-outlet /></div>
		</div>
	`,
	styles: `
		.container {
			height: 100%; 
			width: 100%;
			display: flex;
			align-items:center;
			justify-content:center;
			box-sizing: border-box;
			padding: 50px;

			@media (max-width:768px) {
				padding: 5px;
			}
			.content {
				width: 100%;
				max-width: 1000px;
				max-height: 100%;
				overflow: hidden;
				padding: 20px;
				border-radius: 20px;
				background-color: #cbd5e1;
				border: 2px solid #f8fafc;
				box-sizing: border-box;
			}
		}
	`,
	imports: [RouterOutlet],
})
export class App {}

bootstrapApplication(App)
