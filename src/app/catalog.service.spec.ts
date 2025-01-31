import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing'

import { CatalogService } from './catalog.service'
import { Catalog } from './catalog.model'
import { BLASTERS, LASER_SABERS, MOCK_HTTP_DELAY } from './mock-data'

describe('CatalogService', () => {
	let service: CatalogService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(CatalogService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should initially emit null data', () => {
		let blasters: Catalog.Blaster[] | null = null
		let laserSabers: Catalog.LaserSaber[] | null = null

		service.blasters$.subscribe((val) => {
			blasters = val
		})
		service.laserSabers$.subscribe((val) => {
			laserSabers = val
		})

		expect(blasters).toBe(null)
		expect(laserSabers).toBe(null)
	})

	// it('should emit data properly after HTTP call', fakeAsync(() => {
	// 	let blasters: Catalog.Blaster[] | null = null
	// 	let laserSabers: Catalog.LaserSaber[] | null = null

	// 	service.blasters$.subscribe((val) => {
	// 		blasters = val
	// 	})
	// 	service.laserSabers$.subscribe((val) => {
	// 		laserSabers = val
	// 	})

	// 	expect(blasters).toBeNull()
	// 	expect(laserSabers).toBeNull()

	// 	// since we're not actually using a http request, just wait for delay
	// 	tick(MOCK_HTTP_DELAY)
	// 	flush()

	// 	expect(blasters as unknown).toEqual(BLASTERS)
	// 	expect(laserSabers as unknown).toEqual(LASER_SABERS)
	// }))
})
