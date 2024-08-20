import React, {useEffect, useState} from 'react';
import styles from './SearchForm.module.scss'
import MyInput from "../../UI/MyInput/MyInput";
import MyCheckbox from "../../UI/MyCheckbox/MyCheckbox";
import MyButtonBlue from "../../UI/MyButtonBlue/MyButtonBlue";
import MyDateInput from "../../UI/MyDateInput/MyDateInput";
import {useNavigate} from "react-router-dom";
import {validateDateRange, validateInn, validateLimit} from "../../../utils/services/validation";
import * as sea from "node:sea";


function SearchForm() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        inn: "",
        innError: false,
        innErrorText: '',
        tonality: "any",
        limit: "",
        limitError: false,
        limitErrorText: '',
        startDate: "",
        startDateError: false,
        endDate: "",
        endDateError: false,
        dateErrorText: "",
        maxFullness: false,
        inBusinessNews: false,
        onlyMainRole: false,
        onlyWithRiskFactors: false,
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true,
        opacityLoginBtn: 0.5,
        isValidData: false,
    });


    useEffect(() => {
            if (
                (searchParams.inn && !searchParams.innError) &&
                (searchParams.limit && !searchParams.limitError) &&
                (searchParams.startDate && !searchParams.startDateError) &&
                (searchParams.endDate && !searchParams.endDateError)
            ) {
                setSearchParams(
                    {
                        ...searchParams,
                        opacityLoginBtn: 1,
                        isValidData: true,
                    })
            }
        }, [
            searchParams.inn,
            // searchParams.innError,
            searchParams.limit,
            // searchParams.limitError,
            searchParams.startDate,
            // searchParams.startDateError,
            searchParams.endDate,
            // searchParams.endDateError
        ]
    );


    const doSearch = (event) => {
        event.preventDefault();
        navigate('/result', {state: {searchParams: searchParams}});
    }

    const checkValidInn = (inn) => {
        let resultValidate = validateInn(inn);
        if (resultValidate) {
            setSearchParams(
                {
                    ...searchParams,
                    opacityLoginBtn: 0.5,
                    isValidData: false,
                    innError: true,
                    innErrorText: resultValidate,
                })
        } else {
            setSearchParams(
                {
                    ...searchParams,
                    innError: false,
                    innErrorText: '',
                })
        }
    }

    const checkValidLimit = (limit) => {
        let resultValidate = validateLimit(limit);
        if (resultValidate) {
            setSearchParams(
                {
                    ...searchParams,
                    opacityLoginBtn: 0.5,
                    isValidData: false,
                    limitError: true,
                    limitErrorText: resultValidate,
                })
        } else {
            setSearchParams(
                {
                    ...searchParams,
                    limitError: false,
                    limitErrorText: '',
                })
        }
    }

    const checkValidDateRange = (startDate, endDate) => {
        let resultValidate = validateDateRange(startDate, endDate);
        if (resultValidate) {
            setSearchParams(
                {
                    ...searchParams,
                    opacityLoginBtn: 0.5,
                    isValidData: false,
                    startDateError: true,
                    endDateError: true,
                    dateErrorText: resultValidate,
                })
        } else {
            setSearchParams(
                {
                    ...searchParams,
                    startDateError: false,
                    endDateError: false,
                    dateErrorText: resultValidate,
                })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <p className={styles.inputTitle}>ИНН компании *</p>
                <MyInput
                    name="inn"
                    value={searchParams.inn}
                    type="text"
                    imputmode="numeric"
                    minLength="10"
                    maxLength="10"
                    error={searchParams.innError}
                    errorMsg={searchParams.innErrorText}
                    placeholder="10 цифр"
                    style={{fontSize: 14, textAlign: "center", width: 220,}}
                    onChange={e => (setSearchParams({...searchParams, inn: e.target.value}))}
                    onBlur={e => checkValidInn(e.target.value)}
                />

                <p className={styles.inputTitle}>Тональность</p>
                <select
                    name="tonality"
                    className={styles.mySelect}
                    value={searchParams.tonality}
                    onChange={(e) => {
                        setSearchParams({...searchParams, tonality: e.target.value})
                    }}>
                    <option value="any">Любая</option>
                    <option value="positive">Позитивная</option>
                    <option value="negative">Негативная</option>
                </select>

                <p className={styles.inputTitle}>Количество документов к выдаче *</p>
                <MyInput
                    name="limit"
                    value={searchParams.limit}
                    type="number"
                    imputmode="numeric"
                    minLength="1"
                    maxLength="4"
                    min="1"
                    max="1000"
                    error={searchParams.limitError}
                    errorMsg={searchParams.limitErrorText}
                    placeholder="от 1 до 1000"
                    style={{fontSize: 14, textAlign: "center", width: 220}}
                    onChange={e => {
                        setSearchParams({...searchParams, limit: e.target.value})
                    }}
                    onBlur={e => checkValidLimit(e.target.value)}
                />
                <p className={styles.inputTitle}>Диапазон поиска *</p>
                <div className={styles.dateBox}>
                    <MyDateInput
                        name="startDate"
                        type="date"
                        value={searchParams.startDate}
                        placeholder="Дата начала"
                        error={searchParams.startDateError}
                        onChange={(e) => {
                            setSearchParams({...searchParams, startDate: e.target.value})
                        }}
                        onBlur={e => checkValidDateRange(e.target.value, searchParams.endDate)}
                    />

                    <MyDateInput
                        name="endDate"
                        type="date"
                        value={searchParams.endDate}
                        style={{marginLeft: 20}}
                        error={searchParams.endDateError}
                        placeholder="Дата конца"
                        onChange={(e) => {
                            setSearchParams({...searchParams, endDate: e.target.value})
                        }}
                        onBlur={e => checkValidDateRange(searchParams.startDate, e.target.value)}
                    />
                </div>
                {(searchParams.startDateError || searchParams.endDateError) ?
                    <span className={styles.errorDateSpan}>{searchParams.dateErrorText}</span> :
                    <span className={styles.errorDateSpan}></span>
                }
                <span className={styles.errorDateSpan}></span>

            </div>
            <div className={styles.rightSide}>
                <MyCheckbox
                    name="maxFullness"
                    checked={searchParams.maxFullness}
                    setChecked={() => (setSearchParams({...searchParams, maxFullness: !searchParams.maxFullness}))}
                >Признак максимальной полноты
                </MyCheckbox>

                <MyCheckbox
                    name="inBusinessNews"
                    checked={searchParams.inBusinessNews}
                    setChecked={() => (setSearchParams({
                        ...searchParams,
                        inBusinessNews: !searchParams.inBusinessNews
                    }))}
                >Упоминания в бизнес-контексте
                </MyCheckbox>

                <MyCheckbox
                    name="onlyMainRole"
                    checked={searchParams.onlyMainRole}
                    setChecked={() => (setSearchParams({...searchParams, onlyMainRole: !searchParams.onlyMainRole}))}
                >Главная роль в публикации
                </MyCheckbox>

                <MyCheckbox
                    name="onlyWithRiskFactors"
                    checked={searchParams.onlyWithRiskFactors}
                    setChecked={() => (setSearchParams({
                        ...searchParams,
                        onlyWithRiskFactors: !searchParams.onlyWithRiskFactors
                    }))}
                >Публикация только с риск-факторами
                </MyCheckbox>

                <MyCheckbox
                    name="excludeTechNews"
                    checked={!searchParams.excludeTechNews}
                    setChecked={() => (setSearchParams({
                        ...searchParams,
                        excludeTechNews: !searchParams.excludeTechNews
                    }))}
                >Включать технические новости рынка
                </MyCheckbox>

                <MyCheckbox
                    name="excludeAnnouncements"
                    checked={!searchParams.excludeAnnouncements}
                    setChecked={() => (setSearchParams({
                        ...searchParams,
                        excludeAnnouncements: !searchParams.excludeAnnouncements
                    }))}
                >Включать анонсы и календари
                </MyCheckbox>

                <MyCheckbox
                    name="excludeDigests"
                    checked={!searchParams.excludeDigests}
                    setChecked={() => (setSearchParams({
                        ...searchParams,
                        excludeDigests: !searchParams.excludeDigests
                    }))}
                >Включать сводки новостей
                </MyCheckbox>

                <MyButtonBlue
                    style={{marginTop: 117, marginLeft: 41, width: 305, opacity: searchParams.opacityLoginBtn}}
                    disabled={!(searchParams.isValidData)}
                    onClick={(e) => {
                        doSearch(e)
                    }}
                >Поиск</MyButtonBlue>
                <p className={styles.requiredFieldsMsg}>* Обязательные к заполнению поля</p>
            </div>
        </div>
    );
}

export default SearchForm;