import React from 'react';
import styles from './PublicationCards.module.scss'
import MyAttributesLable from "../../UI/MyAttributesLable/MyAttributesLable";

function PublicationCards({item, ...props}) {
    return (
        <div className={styles.container}>
          <div className={styles.dataSourceBox}>
            <span className={styles.data}>{new Date(item.ok.issueDate).toLocaleDateString()}</span>
            <a className={styles.source} href={item.ok.url} target="_blank">{item.ok.source.name}</a>
          </div>
          <span className={styles.title}>{item.ok.title.text}</span>
          <MyAttributesLable attribut={item.ok.attributes}/>
          
        </div>
    );
}

export default PublicationCards;