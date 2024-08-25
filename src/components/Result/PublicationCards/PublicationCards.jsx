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
            <img className={styles.picture} src="https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D" />
          
        </div>
    );
}

export default PublicationCards;