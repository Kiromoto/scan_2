import React from 'react';
import styles from './MobileHistogram.module.scss'

function MobileHistogram({inputData, ...props}) {
	
	
	return (
		<div className={styles.container}>
			{/*<h1 className={styles.title}>Общая сводка</h1>*/}
			{/*<section className={styles.titleCount}>Найдено {data.length || 0} варианта(ов)</section>*/}
		</div>
	);
}

export default MobileHistogram;