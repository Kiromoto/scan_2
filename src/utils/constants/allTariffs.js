import lamp from './../../assets/images/Main/tariffs/lamp.svg';
import aim from './../../assets/images/Main/tariffs/aim.svg';
import laptop from './../../assets/images/Main/tariffs/laptop.svg';
import colors from '../../index.scss'

export const allTariffs = [
    {
        id: 1,
        name: "Beginner",
        forWhom: "Для небольшого исследования",
        price: "799 ₽",
        fullPrice: "1 200 ₽",
        installmentTerms: "или 150 ₽/мес. при рассрочке на 24 мес.",
        tariffDescription: ['Безлимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7'],
        image: lamp,
        imageName: 'lamp',
        color: colors.colorBlack,
        background: colors.colorOrange,
    },
    {
        id: 2,
        name: "Pro",
        forWhom: "Для HR и фрилансеров",
        price: "1 299 ₽",
        fullPrice: "2 600 ₽",
        installmentTerms: "или 279 ₽/мес. при рассрочке на 24 мес.",
        tariffDescription: ['Все пункты тарифа Beginner', 'Экспорт истории', 'Рекомендации по приоритетам'],
        image: aim,
        imageName: 'aim',
        color: colors.colorBlack,
        background: colors.colorTurquoise,
    },
    {
        id: 3,
        name: "Business",
        forWhom: "Для корпоративных клиентов",
        price: "2 379 ₽",
        fullPrice: "3 700 ₽",
        installmentTerms: "",
        tariffDescription: ['Все пункты тарифа Pro', 'Безлимитное количество запросов', 'Приоритетная поддержка'],
        image: laptop,
        imageName: 'laptop',
        color: colors.colorWhite,
        background: colors.colorBlack,
    },
]