import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { ItemDetailsComponent } from './item-details.component'
import { CatalogService } from '../../services/catalog.service'

describe('ItemDetailsComponent', () => {
	let component: ItemDetailsComponent
	let fixture: ComponentFixture<ItemDetailsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ItemDetailsComponent],
			providers: [
				{ provide: CatalogService, useValue: { catalog$: of([]) } },
				{
					provide: ActivatedRoute,
					useValue: { paramMap: of({ get: () => 'blasters' }) },
				},
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ItemDetailsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
