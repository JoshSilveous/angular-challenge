import { TestBed } from '@angular/core/testing'
import { CatalogService } from './catalog.service'
import { MOCK_RETRIEVED_BLASTERS, MOCK_RETRIEVED_LASER_SABERS } from '../mock-data'

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
		service.catalog$.subscribe((catalog) => {
			expect(catalog).toBe(null)
		})
	})
	it('should emit data properly after HTTP call completes', (done) => {
		const failTimeout = setTimeout(() => {
			done.fail('Test timed out: Catalog data was not received in time')
		}, 3000)
		service.catalog$.subscribe((catalog) => {
			if (catalog) {
				clearTimeout(failTimeout)
				expect(catalog).toEqual([
					MOCK_RETRIEVED_BLASTERS,
					MOCK_RETRIEVED_LASER_SABERS,
				])
				done()
			}
		})
	})
})
