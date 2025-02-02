import { Pipe, PipeTransform } from '@angular/core'
import { formatAccounting } from '../functions/formatAccounting'

@Pipe({
	name: 'formatAccounting',
	standalone: true,
})
export class FormatAccountingPipe implements PipeTransform {
	transform(value: number | string): string {
		return formatAccounting(value)
	}
}
