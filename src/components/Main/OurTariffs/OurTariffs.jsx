import React from 'react';
import styles from './OurTariffs.module.scss';
import { allTariffs } from '../../../utils/constants/allTariffs'
import OneCardTariff from "./OneCardTariff/OneCardTariff";

function OurTariffs() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>НАШИ ТАРИФЫ</div>
            <div className={styles.cardsContainer}>
                {allTariffs.map((item)  => (
                    <OneCardTariff key={item.id} item={item} />
                ))}

            </div>
        </div>
    );
}

export default OurTariffs;