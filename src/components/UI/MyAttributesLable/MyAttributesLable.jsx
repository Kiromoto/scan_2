import React from 'react';
import styles from "./MyAttributesLable.module.scss";

function MyAttributesLable({attribut, ...props}) {
	let text = ''
	const opacity = attribut.isTechNews || attribut.isAnnouncement || attribut.isDigest ? 1 : 0
	
	if (attribut.isTechNews) {
		text = 'Технические новости'
	} else if (attribut.isAnnouncement) {
		text = 'Анонсы и события'
	} else if (attribut.isDigest) {
		text = 'Cводки новостей'
	}
	
	return (
		<div className={styles.container} style={{opacity: opacity}}>
			{text}
		</div>
	);
}

export default MyAttributesLable;