import React from 'react';
import styles from './MyInput.module.scss'

function MyInput({error, errorMsg, ...props}) {
    const rootClasses = [styles.myInput]
    if (error) {
        rootClasses.push(styles.error)
    }

    return (
        <>
            <input className={rootClasses.join(' ')} {...props}/>
            {
                error
                    ?
                    <div className={styles.errorArea}>{errorMsg}</div>
                    :
                    <div className={styles.errorArea}></div>
            }
        </>

    );
}

export default MyInput;