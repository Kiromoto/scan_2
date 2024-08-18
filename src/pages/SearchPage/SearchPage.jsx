import React from 'react';
import styles from './SearchPage.module.scss';
import TitleSearch from "../../components/Search/TitleSearch/TitleSearch";
import SearchForm from "../../components/Search/SearchForm/SearchForm";
import RocketMan from "../../components/Search/RocketMan/RocketMan";

function SearchPage(props) {
    return (
        <div className={styles.container}>
            <TitleSearch/>
            <div className={styles.formBox}>
                <SearchForm/>
                <RocketMan/>
            </div>
        </div>
    );
}

export default SearchPage;


// 772 756 377 8