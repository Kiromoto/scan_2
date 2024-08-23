import React, {useEffect, useState} from 'react';
import styles from './Histogram.module.scss'
import {useAuth} from "../../../hooks/useAuth";
import axios from "axios";
import Slider from "react-slick";
import {ReactComponent as RightChevron} from '../../../assets/images/Main/carousel/right-chevron.svg';
import {ReactComponent as LeftChevron} from '../../../assets/images/Main/carousel/left-chevron.svg';
import Loading from "../../UI/Loading/Loading";
import {getTotalRisk} from "../../../utils/services/getTotalRisk";


function Histogram({inputData, ...props}) {
    const {accessToken, expire} = useAuth()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const amountVisible = 8
    const maxSlideNumber = data.length > amountVisible ? amountVisible : (data.length > 1 ? data.length : 2) ;
    const variableWidth = 1128 / maxSlideNumber;

    useEffect(() => {
        setIsLoading(true)
        axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms',
            inputData, {
                headers: {Authorization: `Bearer ${accessToken}`, expire: expire, "Content-Type": "application/json",}
            }
        ).then(response => {
            setData(getTotalRisk(response.data.data))
            setIsLoading(false);
        }).catch(err => {
            console.log('Get riskFactor info is ERROR: ', err)
        })

    }, [inputData]);


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
        slidesToShow: (true ? maxSlideNumber : 1),
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow:  data.length > amountVisible ? <RightArrow/> : <></>,
        prevArrow: data.length > amountVisible ? <LeftArrow/> : <></>,

    };


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Общая сводка</h1>
            <section className={styles.titleCount}>Найдено {data.length || 0} варианта(ов)</section>
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
        </div>
    );
}

export default Histogram;
