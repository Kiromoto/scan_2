import React from 'react';
import styles from './MobileHistogram.module.scss'
import Loading from "../../../UI/Loading/Loading";
import Slider from "react-slick";
import {ReactComponent as RightChevron} from '../../../../assets/images/Main/carousel/right-chevron.svg';
import {ReactComponent as LeftChevron} from '../../../../assets/images/Main/carousel/left-chevron.svg';

function MobileHistogram({isLoading, data, ...props}) {
	function LeftArrow(props) {
		const {className, style, onClick} = props;
		return (
			<LeftChevron
				className={className}
				style={{...style, display: "block", left: '-14%', width: "39px", height: "39px"}}
				onClick={onClick}
			/>
		);
	}
	
	function RightArrow(props) {
		const {className, style, onClick} = props;
		return (
			<RightChevron
				className={className}
				style={{...style, display: "block", right: '-38px', width: "39px", height: "39px"}}
				onClick={onClick}
			/>
		);
	}
	
	const settings = {
		className: "slider",
		variableWidth: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		nextArrow: data.length > 1 ? <RightArrow/> : <></>,
		prevArrow: data.length > 1 ? <LeftArrow/> : <></>,
		
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
					<div className="slider-container" style={{width: "100%"}}>
						<Slider {...settings}>
							{
								data.map(item =>
									<div key={item.date}>
										<div className={styles.onePeriod}>
											<div className={styles.periodItemUl}>{new Date(item.date).toLocaleDateString()}</div>
											<div className={styles.periodItemUl}>{item.totalDocuments}</div>
											<div className={styles.periodItemUl}>{item.riskFactors}</div>
										</div>
									
									</div>
								)
							}
						</Slider>
					</div>
				}
			</div>
		</div>
	);
}

export default MobileHistogram;