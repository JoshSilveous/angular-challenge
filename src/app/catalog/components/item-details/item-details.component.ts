import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { CatalogService } from '../../services/catalog.service'
import { combineLatest, map } from 'rxjs'
import { Catalog } from '../../services/catalog.model'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { FormatAccountingPipe } from '../../../shared/pipes/format-accounting.pipe'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { formatAccounting } from '../../../shared/functions/formatAccounting'

@Component({
	selector: 'app-item-details',
	imports: [
		CommonModule,
		FormsModule,
		FormatAccountingPipe,
		RouterModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
	],
	templateUrl: './item-details.component.html',
	styleUrl: './item-details.component.scss',
})
export class ItemDetailsComponent implements OnInit {
	itemName: Catalog.CatalogEntry<any>['name'] | null = null
	itemModels:
		| {
				name: string
				price: number
				otherProperties: [string, any][]
		  }[]
		| null = null

	currentSelectedModel = -1 // ideally, each model would have a unique ID instead of using indexes
	currentQuantity = 1
	price = 0

	constructor(
		private route: ActivatedRoute,
		private catalogService: CatalogService,
		private router: Router
	) {}

	selectModel(index: number) {
		this.currentSelectedModel = index
		this.recalculatePrice()
	}

	onQuantityChange(e: Event) {
		const target = e.target as HTMLInputElement
		const inputValue = target.value

		const parsedValue = inputValue ? parseInt(inputValue) : 0

		this.currentQuantity = Math.max(Math.floor(parsedValue), 1)

		target.value = this.currentQuantity.toString()
		this.recalculatePrice()
	}

	placeOrder() {
		alert(
			'Your order has been placed!' +
				`\nItem: ${this.itemName}` +
				`\nModel: ${this.itemModels![this.currentSelectedModel].name}` +
				`\nQuantity: ${this.currentQuantity}` +
				`\n\nTotal: $${formatAccounting(this.price)}`
		)
	}

	ngOnInit(): void {
		combineLatest([this.route.paramMap, this.catalogService.catalog$])
			.pipe(
				map(([params, catalog]) => {
					if (!catalog || !params) {
						return null
					} else {
						const itemId = params.get('itemId')
						const curProduct = catalog.find((cat) => cat.id === itemId)

						if (!curProduct) {
							// item id provided in url has no match
							this.router.navigate(['/catalog'])
							return null
						}

						return {
							name: curProduct.name,
							options: curProduct.items,
						}
					}
				})
			)
			.subscribe((res) => {
				if (res) {
					this.itemName = res.name
					this.itemModels = res.options.map((model) => {
						const { name, price, ...otherProperties } = model
						return {
							name,
							price,
							otherProperties: Object.entries(otherProperties),
						}
					})
				}
			})
	}
	private recalculatePrice() {
		this.price =
			this.currentSelectedModel !== -1 && this.itemModels !== null
				? this.itemModels[this.currentSelectedModel].price * this.currentQuantity
				: 0
	}
}
