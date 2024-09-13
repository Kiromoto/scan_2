import React from 'react';
import styles from "./TitleSearch.module.scss";
import womenAim from "../../../assets/images/Main/result/womenAim.svg";

function TitleSearch() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.textFindSoon}>Ищем. Скоро<br/> будут результаты</div>
                <div className={styles.textNeedTime}>Поиск может занять некоторое время,<br/> просим сохранять
                    терпение.
                </div>
            </div>
            <div className={styles.imgBox}>
                <img src={womenAim} alt="womenAim"/>
            </div>
        </div>
    );
}

export default TitleSearch;