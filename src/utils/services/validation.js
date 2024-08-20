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
        return 'Введите корректные данные'
    } else if (inn.length < 10 || inn.length === 11 || inn.length > 12) {
        return 'Введите корректные данные';
    }

    return resultError;
}


export function validateLimit(limit) {
    let resultError = "";

    if (typeof Number(limit) === 'number') {
        if (limit < 1) {
            return 'Введите корректные данные'
        } else if (limit > 1000) {
            return 'Введите корректные данные'
        }
    } else {
        return 'Введите корректные данные'
    }


    return resultError;
}


export function validateDateRange(startDate, endDate) {
    let resultError = "";

    if (startDate && endDate) {
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        const now = new Date()

        console.log("validateDateRange", startDate, endDate)
        if ((startDate > now) || (endDate > now)) {
            return 'Введите корректные данные'
        }
        else if (startDate > endDate) {
            return 'Введите корректные данные'
        }

    }
    else if (!startDate) {
        return 'Введите корректные данные'
    }
    else if (!endDate) {}

    return resultError;
}