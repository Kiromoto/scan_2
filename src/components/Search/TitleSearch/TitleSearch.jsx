import React from 'react';
import styles from './TitleSearch.module.scss'
import document from "../../../assets/images/Main/search/document.svg";
import folders from "../../../assets/images/Main/search/folders.svg";

function TitleSearch() {
    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <div className={styles.title}>Найдите необходимые данные в пару кликов.</div>
                <div className={styles.textInfo}>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</div>
            </div>
            <div className={styles.imgBox}>
                <img className={styles.documentImg} src={document} alt='documentImage'/>
                <img className={styles.foldersImg} src={folders} alt='foldersImage'/>
            </div>
        </div>
    );
}

export default TitleSearch;