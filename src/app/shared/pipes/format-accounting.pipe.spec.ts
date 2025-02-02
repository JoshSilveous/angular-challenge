import { FormatAccountingPipe } from './format-accounting.pipe'

describe('FormatAccountingPipe', () => {
	const pipe = new FormatAccountingPipe()
	it('create an instance', () => {
		expect(pipe).toBeTruthy()
	})
	it('should convert "0" to "0.00"', () => {
		expect(pipe.transform('0')).toBe('0.00')
	})
	it('should convert "123456749123.4" to "123,456,749,123.40"', () => {
		expect(pipe.transform('123456749123.4')).toBe('123,456,749,123.40')
	})
	it('should convert -12345.67 to "-12,345.67"', () => {
		expect(pipe.transform(-12345.67)).toBe('-12,345.67')
	})
	it('should convert NaN to "0.00"', () => {
		expect(pipe.transform(NaN)).toBe('0.00')
	})
})
