import React from 'react';
import styles from "./DesktopHistogram.module.scss";
import Loading from "../../../UI/Loading/Loading";
import Slider from "react-slick";
import {ReactComponent as RightChevron} from '../../../../assets/images/Main/carousel/right-chevron.svg';
import {ReactComponent as LeftChevron} from '../../../../assets/images/Main/carousel/left-chevron.svg';

function DesktopHistogram({isLoading, data, ...props}) {
	const amountVisible = 8
	const maxSlideNumber = data.length > amountVisible ? amountVisible : (data.length > 1 ? data.length : 2) ;
	const variableWidth = 1128 / maxSlideNumber;
	
	function LeftArrow(props) {
		const {className, style, onClick} = props;
		return (
			<LeftChevron
				className={className}
				style={{...style, display: "block", left: '-16%', width: "39px", height: "39px"}}
				onClick={onClick}
			/>
		);
	}
	
	function RightArrow(props) {
		const {className, style, onClick} = props;
		return (
			<RightChevron
				className={className}
				style={{...style, display: "block", right: '-4%', width: "39px", height: "39px"}}
				onClick={onClick}
			/>
		);
	}
	
	const settings = {
		className: "slider variable-width",
		variableWidth: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: maxSlideNumber,
		slidesToScroll: 1,
		swipeToSlide: true,
		nextArrow:  data.length > amountVisible ? <RightArrow/> : <></>,
		prevArrow: data.length > amountVisible ? <LeftArrow/> : <></>,
		
	};




	return (
		<div className={styles.histogramBox}>
			<div className={styles.greenTitleSections}>
				<section>Период</section>
				<section>Всего</section>
				<section>Риски</section>
			</div>
			<div className={styles.sliderResultContent}>
				{isLoading
					?
					<Loading imgSize={50} style={{alignSelf: "center"}} textAdd="Загружаем данные"/>
					:
					<div className="slider-container">
						<Slider {...settings}>
							{
								data.map(item =>
									<div key={item.date} style={{width: variableWidth}}>
										<div className={styles.onePeriod}>
											<div
												className={styles.periodItemUl}>{new Date(item.date).toLocaleDateString()}</div>
											<div className={styles.periodItemUl}>{item.totalDocuments}</div>
											<div className={styles.periodItemUl}>{item.riskFactors}</div>
										</div>
									
									</div>
								)
							}
							{(data.length < 2) ? <div style={{width: variableWidth}}></div> : ""}
						</Slider>
					</div>
				}
			</div>
		</div>
	);
}

export default DesktopHistogram;