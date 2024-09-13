import React from 'react';
import styles from './PublicationCards.module.scss'
import MyAttributesLable from "../../UI/MyAttributesLable/MyAttributesLable";
import MyButtonLtBlue from "../../UI/MyButtonLtBlue/MyButtonLtBlue";
import {getHrefImg} from "../../../utils/services/getHrefImg";
import noImg from "../../../assets/images/Main/result/businessnews.jpg";
import {doClearText} from "../../../utils/services/doClearText";
import {countToWords} from "../../../utils/services/countToWords";
import {useDeviceType} from "../../../hooks/useDeviceType";

const readMoreBtnStyle = {
	height: '47px',
	width: '223px',
	fontFamily: 'Inter',
	fontSize: '18px',
	fontWeight: '400',
	lineHeight: '19.36px',
	letterSpacing: '0.02em',
	textAlign: 'center',
	marginLeft: 0,
	border: 0,
}

function PublicationCards({item, ...props}) {
	let {isMobile} = useDeviceType()
	const lenghtSliceTitle = isMobile ? 1000 : 78
	const endPointText = item.ok.title.text.length > lenghtSliceTitle ? '...' : ''
	const sourceImg = getHrefImg(item.ok.content.markup) || noImg;
	const textClear = doClearText(item.ok.content.markup, isMobile)
	
	return (
		<div className={styles.container}>
			<div className={styles.dataSourceBox}>
				<span className={styles.data}>{new Date(item.ok.issueDate).toLocaleDateString()}</span>
				<a className={styles.source} href="/">{item.ok.source.name}</a>
			</div>
			<a href={item.ok.url} target="_blank" rel="noreferrer" className={styles.title}><span
				className={styles.title}>{(item.ok.title.text).slice(0, lenghtSliceTitle) + endPointText}</span></a>
			<MyAttributesLable attribut={item.ok.attributes} isMobile={isMobile}/>
			<div className={styles.pictureBox}>
				<img
					alt="publication img"
					src={sourceImg}/>
			</div>
			
			<div className={styles.textBox}>{textClear}</div>
			<div className={styles.btnAndWordCountBox}>
				<MyButtonLtBlue
					style={readMoreBtnStyle}
					onClick={() => window.open(item.ok.url)}
				>Читать в источнике
				</MyButtonLtBlue>
				<span
					className={styles.wordCount}>{item.ok.attributes.wordCount} {countToWords(item.ok.attributes.wordCount)}</span>
			</div>
		
		</div>
	);
}

export default PublicationCards;