import { Component, OnInit } from '@angular/core'
import { CatalogService } from '../../services/catalog.service'
import { Catalog } from '../../services/catalog.model'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'item-select',
	imports: [CommonModule, RouterModule],
	templateUrl: './item-select.component.html',
	styleUrl: './item-select.component.scss',
})
export class ItemSelectComponent {
	catalog$ = this.catalogService.catalog$

	constructor(private catalogService: CatalogService) {}
}
