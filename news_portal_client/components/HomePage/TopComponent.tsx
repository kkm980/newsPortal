/* eslint-disable @typescript-eslint/no-empty-interface */
import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';

import 'tailwindcss/tailwind.css';
import TitleNews from './TitleNews';
import WeatherBox from './WeatherBox';
import WeatherBox_smallScreen from './WeatherBox_smallScreen';
import TitleNews_smallScreen from './TitleNews_smallScreen';


interface IProps {
  latestNewsData:unknown
}


const TopComponent: React.FC<IProps> = (latestNewsData) => {
    return (
        <div className={'w-[80%] sm:w-[95%] bg-[white] flex md:flex-col justify-between items-start'}>
            <WeatherBox_smallScreen/>
            <TitleNews_smallScreen latestNewsData={latestNewsData}/>
            <TitleNews latestNewsData={latestNewsData}/>
            <WeatherBox/>
        </div>
    );
};

export default TopComponent;