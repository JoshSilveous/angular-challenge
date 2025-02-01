import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CatalogService } from '../../services/catalog.service'
import { combineLatest, map } from 'rxjs'
import { Catalog } from '../../services/catalog.model'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
	selector: 'app-item-details',
	imports: [CommonModule, FormsModule],
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

	currentSelectedModel = -1
	currentQuantity = 1

	price = 0

	constructor(
		private route: ActivatedRoute,
		private catalogService: CatalogService,
		private router: Router
	) {}

	selectModel(index: number) {
		this.currentSelectedModel = index
		console.log('model is now:', this.currentSelectedModel)
		console.log('quan is now:', this.currentQuantity)
		this.recalculatePrice()
	}

	onQuantityChange(e: Event) {
		const inputValue = (e.target as HTMLInputElement).value
		this.currentQuantity = inputValue ? parseInt(inputValue) : 0
		this.recalculatePrice()
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
