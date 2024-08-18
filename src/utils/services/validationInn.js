export function validateInn(inn, error = {}) {
    let resultError = "";

    if (typeof inn === 'number') {
        inn = inn.toString();
    } else if (typeof inn !== 'string') {
        inn = '';
    }

    if (!inn.length) {
        return 'Введите ИНН'
    } else if (/[^0-9]/.test(inn)) {
        return 'ИНН может состоять только из цифр'
    } else if ([10, 12].indexOf(inn.length) === -1) {
        return 'ИНН может состоять только из 10 или 12 цифр';
    }

    return resultError;
}

export function getNoun(number, one, two, five) {
    let n = Math.abs(number);

    n %= 100;

    if (n >= 5 && n <= 20) {
        return five;
    }

    n %= 10;

    if (n === 1) {
        return one;
    }

    if (n >= 2 && n <= 4) {
        return two;
    }

    return five;
}