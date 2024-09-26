import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Toaster} from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';

export const Layout = (props) => {
  return (
    <div>
        <Header/>
        <main>
      <Toaster />
      {props.children}
        </main>

        <Footer/>

    </div>
  )
}
