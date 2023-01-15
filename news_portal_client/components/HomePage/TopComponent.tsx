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
  weatherData:any
}


const TopComponent: React.FC<IProps> = ({latestNewsData, weatherData}) => {
    return (
        <div className={'w-[80%] sm:w-[95%] bg-[white] flex md:flex-col justify-between items-start'}>
            <WeatherBox_smallScreen {...{weatherData}}/>
            <TitleNews_smallScreen latestNewsData={latestNewsData}/>
            <TitleNews latestNewsData={latestNewsData}/>
            <WeatherBox  {...{weatherData}}/>
        </div>
    );
};

export default TopComponent;