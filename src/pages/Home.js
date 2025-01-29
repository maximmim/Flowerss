

import React, { useEffect } from 'react'
import Header from '../cpms/Header'
import Floter from '../cpms/Floter'
import Loading from '../cpms/Loading'
import Korzina from '../cpms/Korzina'
import Full_scr from '../cpms/Full_dw'
import Loading_cenger from '../cpms/Loading_div'
import User from '../cpms/User'


function Home() {
  useEffect(()=>{
    if (!localStorage.storage) {
      localStorage.storage = '[]';
    }
    if (!localStorage.notification) {
      localStorage.notification = '{}'
}
    if (!localStorage.openkorz ||localStorage.openkorz ) {
      localStorage.openkorz = JSON.stringify({korz:false})
    }
    if (!localStorage.openmenu ||localStorage.openmenu ) {
      localStorage.openmenu =  JSON.stringify({menu:false})
    }
    if (!localStorage.load || localStorage.load) {
      localStorage.load = false
    }

},[])
  return (
    <>
        <Header/>
        <Loading_cenger/>
        <Korzina/>
        <User/>
        <Full_scr/>
        <Floter/>
    </>
  )
}

export default Home