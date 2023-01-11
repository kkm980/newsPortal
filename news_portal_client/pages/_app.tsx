import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../store'
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'

import LoaderScreen from '../components/general/loaderScreen';

export default function App({ Component, pageProps }: AppProps) {

  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    console.log(isFetching, "isdfgh")
  }, [isFetching])

  return <Provider store={store}>
    <div className='h-screen m-0 p-0 font-inter flex flex-col overflow-x-hidden 
    overflow-y-auto hide-scrollbar relative bg-[white]'>
      
      {isFetching ? <LoaderScreen /> : <></>}

      <div className='mt-[0px] m-0 p-0'>
        <Component {...{ pageProps, setIsFetching }} />
      </div>

    </div>

  </Provider>
}