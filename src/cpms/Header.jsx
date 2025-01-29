import React, { useEffect } from 'react'
import G_img from './Global'
import Shop from './Shop'
import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from './Noticication';
function Header() {

  return (
    <header className='Head'>
        <G_img/>
        <Notification/>
        <Shop/>

    </header>
  )
}

export default Header