import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ItemSelectComponent } from './catalog/components/item-select/item-select.component'
import { ItemDetailsComponent } from './catalog/components/item-details/item-details.component'

const routes: Routes = [
	{ path: '', redirectTo: 'catalog', pathMatch: 'full' },
	{ path: 'catalog', component: ItemSelectComponent },
	{ path: 'catalog/:itemId', component: ItemDetailsComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
