import React from 'react';
import styles from './MyCheckbox.module.scss'

function MyCheckbox({children, name, checked, setChecked, ...props}) {
    const rootClasses = [styles.myCheckboxLabel]
    if (checked) {
        rootClasses.push(styles.checked)
    }

    return (
        <label className={rootClasses.join(' ')}>
            <input type="checkbox"
                   name={name}
                   className={styles.inputCheckbox}
                   defaultChecked={checked}
                   onChange={setChecked}
            />
            {children}
        </label>
    )
    ;
}

export default MyCheckbox;