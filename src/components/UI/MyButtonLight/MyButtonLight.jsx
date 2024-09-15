import React from 'react';
import styles from './MyButtonLight.module.scss';

export default function MyButtonLight({children, ...props}) {

	return (
		<button
			className={styles.myBtn}
			{...props}>
			{children}
		</button>
	);
};