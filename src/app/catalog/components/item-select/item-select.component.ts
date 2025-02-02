import { Component, OnInit } from '@angular/core'
import { CatalogService } from '../../services/catalog.service'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
@Component({
	selector: 'item-select',
	imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
	templateUrl: './item-select.component.html',
	styleUrl: './item-select.component.scss',
})
export class ItemSelectComponent {
	catalog$ = this.catalogService.catalog$

	constructor(private catalogService: CatalogService) {}
}
