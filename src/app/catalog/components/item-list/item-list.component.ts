import { Component, OnInit } from '@angular/core'
import { CatalogService } from '../../services/catalog.service'
import { Catalog } from '../../services/catalog.model'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'item-list',
	imports: [CommonModule],
	templateUrl: './item-list.component.html',
	styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
	catalog$ = this.catalogService.catalog$

	constructor(private catalogService: CatalogService) {}
}
