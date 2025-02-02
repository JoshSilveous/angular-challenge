export function formatAccounting(value: number | string) {
	if (typeof value === 'string') {
		value = parseFloat(value)
	}

	if (isNaN(value)) {
		return '0.00'
	}

	return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
