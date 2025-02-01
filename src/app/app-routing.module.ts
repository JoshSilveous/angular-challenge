import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ItemSelectComponent } from './catalog/components/item-select/item-select.component'

const routes: Routes = [
	{ path: '', redirectTo: 'catalog', pathMatch: 'full' },
	{ path: 'catalog', component: ItemSelectComponent },
	// { path: 'catalog/:itemId', component: ItemDetailComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
