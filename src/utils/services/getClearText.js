export function getClearText(data) {
	let text = ''
	if (data) {
		text = data.replace(/<[^>]*>/g, '')
		
		while (text.includes('lt;')) {
			text = text.replace('lt;', '')
		}
		while (text.includes('gt;')) {
			text = text.replace('gt;', '')
		}
		while (text.includes('p&gt;')) {
			text = text.replace('p&gt;', '')
		}
		while (text.includes('body')) {
			text = text.replace('body', '')
		}
		while (text.includes('div')) {
			text = text.replace('div', '')
		}
		while (text.includes('article')) {
			text = text.replace('article', '')
		}
		while (text.includes('br')) {
			text = text.replace('br', '')
		}
		while (text.includes('data')) {
			text = text.replace('data', '')
		}
		while (text.includes('p')) {
			text = text.replace('p', '')
		}
		while (text.includes('&')) {
			text = text.replace('&', '')
		}
		while (text.includes('/')) {
			text = text.replace('/', '')
		}
		while (text.includes('=')) {
			text = text.replace('=', '')
		}
	}
	
	return text.slice(0, 790)+'...'
	
	
}
