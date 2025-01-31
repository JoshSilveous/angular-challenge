import { Injectable } from '@angular/core'
import { BehaviorSubject, delay, of } from 'rxjs'
import { Catalog } from './catalog.model'
import { BLASTERS, LASER_SABERS, MOCK_HTTP_DELAY } from './mock-data'

@Injectable({
	providedIn: 'root',
})
export class CatalogService {
	private blastersSubject = new BehaviorSubject<Catalog.Blaster[] | null>(null)
	blasters$ = this.blastersSubject.asObservable()

	private laserSabersSubject = new BehaviorSubject<Catalog.LaserSaber[] | null>(null)
	laserSabers$ = this.laserSabersSubject.asObservable()

	constructor() {
		of(BLASTERS)
			.pipe(delay(MOCK_HTTP_DELAY)) // mock async database call
			.subscribe((blasterData) => {
				console.log('updating blasterData to:', blasterData)

				this.blastersSubject.next(blasterData)
			})

		of(LASER_SABERS)
			.pipe(delay(MOCK_HTTP_DELAY)) // mock async database call
			.subscribe((laserSaberData) => this.laserSabersSubject.next(laserSaberData))
	}
}
