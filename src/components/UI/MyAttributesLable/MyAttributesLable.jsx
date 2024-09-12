import React from 'react';
import styles from "./MyAttributesLable.module.scss";

function MyAttributesLable({attribut, isMobile, ...props}) {
	let text = ''
	const opacity = attribut.isTechNews || attribut.isAnnouncement || attribut.isDigest ? 1 : 0
	const displayState = !opacity && isMobile ? 'none' : 'flex'
	
	if (attribut.isTechNews) {
		text = 'Технические новости'
	} else if (attribut.isAnnouncement) {
		text = 'Анонсы и события'
	} else if (attribut.isDigest) {
		text = 'Cводки новостей'
	}
	
	return (
		<div className={styles.container} style={{opacity: opacity, display: displayState}}>
			{text}
		</div>
	)
}

export default MyAttributesLable;