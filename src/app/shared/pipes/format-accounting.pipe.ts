import { Pipe, PipeTransform } from '@angular/core'
import { formatAccounting } from '../functions/formatAccounting'

@Pipe({
	name: 'formatAccounting',
	standalone: true, // This allows it to be imported directly
})
export class FormatAccountingPipe implements PipeTransform {
	transform(value: number | string): string {
		return formatAccounting(value)
	}
}
