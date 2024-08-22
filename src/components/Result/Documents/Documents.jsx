import React from 'react';
import styles from './Documents.module.scss'
import PublicationCards from "../PublicationCards/PublicationCards";


function Documents({searchParams, ...props}) {
    let a = [{"value": 1},{"value": 2}, {"value": 3}, {"value": 4}, {"value": 5}, {"value": 6}, {"value": 7},]
    const totalDocumentCount = 12
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Список документов</h1>
            <div className={styles.documentsBox}>
                {a.length
                    ?
                    a.map (item =>  <PublicationCards/>)
                    :
                    <h1>Документы не найдены</h1>
                }
            </div>

        </div>
    );
}

export default Documents;