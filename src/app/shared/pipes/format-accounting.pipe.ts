import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'formatAccounting',
	standalone: true, // This allows it to be imported directly
})
export class FormatAccountingPipe implements PipeTransform {
	transform(value: number | string): string {
		if (typeof value === 'string') {
			value = parseFloat(value)
		}

		if (isNaN(value)) {
			return '0.00'
		}

		return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}
}
