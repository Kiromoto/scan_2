export function validateInn(inn, error = {}) {
    let resultError = "";

    if (typeof inn === 'number') {
        inn = inn.toString();
    } else if (typeof inn !== 'string') {
        inn = '';
    }

    if (inn.length === 0) {
        return 'Введите ИНН'
    } else if (/[^0-9]/.test(inn)) {
        return 'ИНН может состоять только из цифр'
    } else if (inn.length < 10 || inn.length === 11 || inn.length > 12) {
        return 'ИНН может состоять только из 10 или 12 цифр';
    }

    return resultError;
}


export function validateLimit(limit) {
    let resultError = "";

    if (typeof Number(limit) === 'number') {
        if (limit < 1) {
            return 'Лимит должен быть положительным числом'
        } else if (limit > 1000) {
            return 'Лимит не может быть больше 1000'
        }
    } else {
        return 'Лимит должен быть положительным числом'
    }


    return resultError;
}


export function validateDateRange(startDate, endDate) {
    let resultError = "";

    if (startDate && endDate) {
        startDate = new Date(startDate)
        endDate = new Date(endDate)

        console.log("validateDateRange", startDate, endDate)
        if (startDate > endDate) {
            return 'Введите корректные данные'
        }

    }
    else if (!startDate) {
        return 'Введите корректные данные'
    }
    else if (!endDate) {}

    return resultError;
}