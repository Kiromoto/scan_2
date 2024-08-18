import React from 'react';
import styles from './OneCardTariff.module.scss'
import MyButtonBlue from "../../../UI/MyButtonBlue/MyButtonBlue";
import {useAuth} from "../../../../hooks/useAuth";
import tick from '../../../../assets/images/Main/tariffs/tick.svg'



function OneCardTariff({item}, ...props) {
    const { isLoggedIn, userTariff, setUserTariff } = useAuth()
    const activeTariff = (userTariff === item.id) && isLoggedIn
    const tariffBorder = activeTariff ? `2px solid ${item.background}` : `0px solid white`

    return (
        <div className={styles.container} style={{border: tariffBorder}}>
            <div className={styles.title} style={{background: item.background, color: item.color}}>
                <div className={styles.nameTariff}>{item.name}</div>
                <div className={styles.forWhom}>{item.forWhom}</div>
                <img className={styles.iconTariff} src={item.image} alt={item.imageName}/>
            </div>
            <div className={styles.body}>
                {
                    activeTariff
                        ?
                        <div className={styles.currentLabel}>Текущий тариф</div>
                        :
                        <div className={styles.noCurrentLabel}></div>
                }
                <div className={styles.price}>
                    <div className={styles.priceNow}>{item.price}</div>
                    <div className={styles.priceFull}>{item.fullPrice}</div>
                </div>
                <div className={styles.installmentPlan}>{item.installmentTerms}</div>
                <div className={styles.tariffsDescription}>
                    <div className={styles.descriptionTitle}>В тариф входит:</div>
                    {item.tariffDescription.map((i, index) => {
                        return (
                            <div className={styles.descriptionOneLine} key={item.id * 10 + index}>
                                <img src={tick} alt="tick"/>
                                <div className={styles.descriptionText}>{i}</div>
                            </div>)
                    })}

                </div>
                {
                    activeTariff
                        ?
                        <MyButtonBlue
                            style={{
                                background: "rgba(210, 210, 210, 1)",
                                color: "rgba(0, 0, 0, 1)",
                                marginTop: 55,
                                marginLeft: 30,
                                marginBottom: 24,
                                }}
                        >Перейти в личный кабинет</MyButtonBlue>
                        :
                        <MyButtonBlue
                            style={{
                                marginTop: 55,
                                marginLeft: 30,
                                marginBottom: 24,
                            }}
                            onClick={() => {setUserTariff(item.id)}}
                        >Подробнее</MyButtonBlue>
                }

            </div>
        </div>
    );
}

export default OneCardTariff;