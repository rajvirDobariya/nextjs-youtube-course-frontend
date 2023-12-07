import '@/styles/globals.css'
import { useEffect } from 'react'
import { Navbar } from 'react-bootstrap';
import NavBar from './navbar';

export default function App({ Component, pageProps }) {

  return (
  <>
  <div>
    <NavBar/>
    <Component {...pageProps} />
  </div>
  </> 
  );
}
