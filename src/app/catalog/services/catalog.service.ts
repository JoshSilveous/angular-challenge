import { Injectable } from '@angular/core'
import { BehaviorSubject, delay, of } from 'rxjs'
import { Catalog } from './catalog.model'
import { MOCK_RETRIEVED_ITEMS, MOCK_HTTP_DELAY } from '../mock-data'

@Injectable({
	providedIn: 'root',
})
export class CatalogService {
	private catalogSubject = new BehaviorSubject<Catalog.FullCatalog | null>(null)
	catalog$ = this.catalogSubject.asObservable()

	constructor() {
		of(MOCK_RETRIEVED_ITEMS)
			.pipe(delay(MOCK_HTTP_DELAY)) // mock async database call
			.subscribe((retrievedCatalog) => {
				this.catalogSubject.next(retrievedCatalog)
			})
	}
}
