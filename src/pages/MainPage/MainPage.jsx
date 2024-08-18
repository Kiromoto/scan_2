import React from 'react';
import AboutService from "../../components/Main/AboutService/AboutService";
import WhyUs from "../../components/Main/WhyUs/WhyUs";
import BigBlackMan from "../../components/Main/BigBlackMan/BigBlackMan";
import OurTariffs from "../../components/Main/OurTariffs/OurTariffs";

export default function MainPage() {
    return (
        <div>
            <AboutService/>
            <WhyUs/>
            <BigBlackMan/>
            <OurTariffs/>
        </div>
    );
};
