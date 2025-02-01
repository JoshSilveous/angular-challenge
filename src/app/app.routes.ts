import { Routes } from '@angular/router'
import { ItemSelectComponent } from './catalog/components/item-select/item-select.component'
import { ItemDetailsComponent } from './catalog/components/item-details/item-details.component'

export const routes: Routes = [
	{ path: '', redirectTo: 'catalog', pathMatch: 'full' },
	{ path: 'catalog', component: ItemSelectComponent },
	{ path: 'catalog/:itemId', component: ItemDetailsComponent },
]
