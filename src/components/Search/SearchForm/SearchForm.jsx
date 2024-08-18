import React, {useEffect, useState} from 'react';
import styles from './SearchForm.module.scss'
import MyInput from "../../UI/MyInput/MyInput";
import MyCheckbox from "../../UI/MyCheckbox/MyCheckbox";
import MyButtonBlue from "../../UI/MyButtonBlue/MyButtonBlue";
import MyDateInput from "../../UI/MyDateInput/MyDateInput";
import {Link, Navigate, useNavigate} from "react-router-dom";
import SearchPage from "../../../pages/SearchPage/SearchPage";
import ResultPage from "../../../pages/ResultPage/ResultPage";
import {validateInn} from "../../../utils/services/validationInn";


function SearchForm() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        inn: "",
        innError: false,
        innErrorText: '',
        tonality: "any",
        limit: null,
        limitError: false,
        startDate: null,
        startDateError: false,
        endDate: null,
        endDateError: false,
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
        if (searchParams.inn.length === 10 || searchParams.inn.length === 12) {
            let resultValidate = validateInn(searchParams.inn);
            if (resultValidate) {
                setSearchParams(
                    {
                        ...searchParams,
                        opacityLoginBtn: 0.5,
                        isValidData: false,
                        innError: true,
                        innErrorText: resultValidate,
                    })
            }
        }



    }, [searchParams.inn, searchParams.limit, searchParams.startDate, searchParams.endDate]);



    const doSearch = (event) => {
        event.preventDefault();
        navigate('/result', {state: {searchParams: searchParams}});
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
                    minlength="10"
                    maxlength="10"
                    error={searchParams.innError}
                    errorMsg={searchParams.innErrorText}
                    placeholder="10 цифр"
                    style={{fontSize: 14, textAlign: "center", width: 220,}}
                    onChange={e => (setSearchParams({...searchParams, inn: e.target.value}))}
                />

                <p className={styles.inputTitle}>Тональность</p>
                <select
                    className={styles.mySelect}
                    value={searchParams.tonality}
                    defaultValue="any"
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
                    minlength="1"
                    maxlength="4"
                    min="0"
                    max="1000"
                    error={searchParams.limitError}
                    errorMsg="Обязательное поле"
                    // errorMsg="Введите корректные данные"
                    placeholder="от 1 до 1000"
                    style={{fontSize: 14, textAlign: "center", width: 220}}
                    onChange={e => {
                        setSearchParams({...searchParams, limit: e.target.value})
                    }}
                />
                <p className={styles.inputTitle}>Диапазон поиска *</p>
                <div className={styles.dateBox}>
                    <MyDateInput
                        name="startDate"
                        type="date"
                        value={searchParams.startDate}
                        placeholder="Дата начала"
                        onChange={(e) => {
                            setSearchParams({...searchParams, startDate: e.target.value})
                        }}
                    />

                    <MyDateInput
                        name="endDate"
                        type="date"
                        value={searchParams.endDate}
                        style={{marginLeft: 20}}
                        placeholder="Дата конца"
                        onChange={(e) => {
                            setSearchParams({...searchParams, endDate: e.target.value})
                        }}
                    />

                </div>


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
                    setChecked={() => (setSearchParams({...searchParams, inBusinessNews: !searchParams.inBusinessNews}))}
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
                    setChecked={() => (setSearchParams({...searchParams, onlyWithRiskFactors: !searchParams.onlyWithRiskFactors}))}
                >Публикация только с риск-факторами
                </MyCheckbox>

                <MyCheckbox
                    name="excludeTechNews"
                    checked={!searchParams.excludeTechNews}
                    setChecked={() => (setSearchParams({...searchParams, excludeTechNews: !searchParams.excludeTechNews}))}
                >Включать технические новости рынка
                </MyCheckbox>

                <MyCheckbox
                    name="excludeAnnouncements"
                    checked={!searchParams.excludeAnnouncements}
                    setChecked={() => (setSearchParams({...searchParams, excludeAnnouncements: !searchParams.excludeAnnouncements}))}
                >Включать анонсы и календари
                </MyCheckbox>

                <MyCheckbox
                    name="excludeDigests"
                    checked={!searchParams.excludeDigests}
                    setChecked={() => (setSearchParams({...searchParams, excludeDigests: !searchParams.excludeDigests}))}
                >Включать сводки новостей
                </MyCheckbox>

                <MyButtonBlue
                    style={{marginTop: 117, marginLeft: 41, width: 305, opacity: searchParams.opacityLoginBtn}}
                    disabled={!(searchParams.isValidData)}
                    onClick={(e) => {doSearch(e)}}
                >Поиск</MyButtonBlue>
                <p className={styles.requiredFieldsMsg}>* Обязательные к заполнению поля</p>
            </div>
        </div>
    );
}

export default SearchForm;