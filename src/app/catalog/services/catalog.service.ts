import { Injectable } from '@angular/core'
import { BehaviorSubject, delay, forkJoin, of } from 'rxjs'
import { Catalog } from './catalog.model'
import {
	MOCK_RETRIEVED_BLASTERS,
	MOCK_RETRIEVED_LASER_SABERS,
	genMockHttpDelay,
} from '../mock-data'

@Injectable({
	providedIn: 'root',
})
export class CatalogService {
	private catalogSubject = new BehaviorSubject<Catalog.FullCatalog | null>(null)
	catalog$ = this.catalogSubject.asObservable()

	constructor() {
		forkJoin([
			// mock fetching the data from two APIs
			of(MOCK_RETRIEVED_BLASTERS).pipe(delay(genMockHttpDelay())),
			of(MOCK_RETRIEVED_LASER_SABERS).pipe(delay(genMockHttpDelay())),
		]).subscribe(([blasters, laserSabers]) => {
			this.catalogSubject.next([blasters, laserSabers])
		})
	}
}
