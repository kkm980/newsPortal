/* eslint-disable linebreak-style */
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';
import React, { useEffect, useState} from 'react';

// eslint-disable-next-line linebreak-style
import { useGetFilterNewsMutation, useGetLatestNewsQuery, useGetNewsMutation, useGetWeatherQuery } from '../app/services/APISlice';
import { LoaderScreen, NavBar } from '../components';
import { TopComponent, LatestNews } from '../components';
import { useRouter } from 'next/router';
import { getUserToken } from '../utils/userAuthToken';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {
  pageProps:any
  setIsFetching:any
}

const Home: React.FC<IProps> = (pageProps, setIsFetching) => {
    const router = useRouter();
    const { isError:hotTopicsError, isLoading:hotTopicsLoading, data:latestNewsData } = useGetLatestNewsQuery();
    const { isError:weatherError, isLoading:weatherLoading, data:weatherData } = useGetWeatherQuery();
    const [getAllNewsfromDB, { data:allNewsDatafromDB, isError:allNewsfromDBError, isLoading:allNewsfromDBLoading}] = useGetNewsMutation();
    const [getFilteredNewsfromDB, { data:allFilteredNewsDatafromDB, isError:allFilteredNewsfromDBError, isLoading:allFilteredNewsfromDBLoading}] = useGetFilterNewsMutation();

    const page_size=5;
    const [page_num, setPage_num]=useState(1);
    const [to_be_shownArray, setTo_be_shownArray]=useState<any>([]);
    const [totalDatafromDB, setTotalDatafromDB]=useState(0);
    const [load, setLoad] = useState(false);
    const [filterSearch_text, setFilterSearch_text] =useState('');
    const [filter, setFilter] =useState(false);

    useEffect(() => {
        !getUserToken() && router.push('/auth');
    },[]);



    const getNewsOnScroll=()=>{
        !filterSearch_text && getAllNewsfromDB({page_num, page_size});
    };
   


    useEffect(()=>{
        filter===true && setTo_be_shownArray([]);
        filter===true && setPage_num(1);
        filter===false && setPage_num(1);
        filter===false && getAllNewsfromDB({page_num, page_size:10});
    },[filter]);

    useEffect(()=>{
        (Math.floor(filterSearch_text.length/3))>=1 &&
        getFilteredNewsfromDB({filterSearch_text, page_num, page_size});

        filterSearch_text.length===0 &&
        setFilter(false);
    },[filterSearch_text]);

    useEffect(() => {
        !filterSearch_text ? setTotalDatafromDB(allNewsDatafromDB?.response?.totalResults)
            :
            setTotalDatafromDB(allFilteredNewsDatafromDB?.response?.totalResults);

        !filterSearch_text ? setPage_num(Math.ceil((to_be_shownArray.length + allNewsDatafromDB?.response?.articles?.length) / page_size))
            :
            setPage_num(Math.ceil((to_be_shownArray.length + allFilteredNewsDatafromDB?.response?.articles?.length) / page_size));

        !filterSearch_text ? allNewsDatafromDB && setTo_be_shownArray([...to_be_shownArray, ...allNewsDatafromDB?.response?.articles])
            :
            allNewsDatafromDB && setTo_be_shownArray([...to_be_shownArray, ...allFilteredNewsDatafromDB?.response?.articles]);
    }, [allNewsDatafromDB,allFilteredNewsDatafromDB ]);


    useEffect(()=>{
        setLoad(allNewsfromDBLoading);
    },[allNewsfromDBLoading]);
    useEffect(()=>{
        setLoad(hotTopicsLoading);
    },[hotTopicsLoading]);
    useEffect(()=>{
        setLoad(weatherLoading);
    },[weatherLoading]);
    useEffect(()=>{
        setLoad(allFilteredNewsfromDBLoading);
    },[allFilteredNewsfromDBLoading]);

    return (
        <>
            <Head>
                <title>news-portal read anything, anywhere</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="image" href="/assets/Thanos.jpg" />
            </Head>
            <main>
                {load && <LoaderScreen/>}
                <NavBar {...{setFilterSearch_text}}/>
                <div className='bg-[white] w-full flex flex-col justify-center items-center mt-[100px]'>
                    <TopComponent {...{latestNewsData, weatherData}}/>
                    <LatestNews {...{to_be_shownArray,totalDatafromDB, getNewsOnScroll }}/>
                    <div className='bg-[#F8F8F8] text-[#949494] text-[16px] w-[100%] 
                    h-[80px] flex justify-center items-center'>
                        Copyright 2023 News Portal
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
