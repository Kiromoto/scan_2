export function countToWords(count) {
	if ((count === 11) || (count === 12) || (count === 13)) {
		return 'слов'
	} else if (count % 10 === 1) {
		return 'слово'
	} else if ((count % 10 === 2) || (count % 10 === 3) || (count % 10 === 4)) {
		return 'слова'
	}

	return 'слов'
}