import React from 'react';
import { Display } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { UserProvider } from '@auth0/nextjs-auth0';


export default function MyApp({ Component, pageProps }) {
  return (
    
    <StateContext>
      <Display>
      
         <Component {...pageProps} />
        
      </Display>
    </StateContext>
  
  );
}

