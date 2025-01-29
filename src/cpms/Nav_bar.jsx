import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'bootstrap/js/dist/toast';
import React, { useEffect, useState } from 'react';
import IconUser from './user_icon';
import FLwoda_dw from './FLowers';
import IconBasket from './kawdk';
import UserModal from './UserModal';
import Shop_dw from './hop';



const OP = () => {

  
const [o_menu,seto_menu]= useState(false)
const [o_korz,seto_korz]= useState(false)



useEffect(()=>{
  if (o_menu) {
    open_man();
  }
  else {
    close_man();
  }
},[o_menu])

useEffect(()=>{
  if (o_korz) {
    open_korzina();
  }
  else {
    close_korzina();
  }
},[o_korz])


const errors = () =>{
  localStorage.notification = JSON.stringify({
    g_text:"На даний момент функція у розробці",
    header:"AI FLOWERS",
    color:"red"
})


const toastLiveExample = document.getElementById('liveToast');
const toastBootstrap = new Toast(toastLiveExample);
toastBootstrap.show();
}



const open_korzina = ()=>{
  const menu_usr = document.getElementsByClassName("UOw")[0];
  const img = document.getElementsByClassName("Korzina_full")[0];
  img.style = 'transform:translate(0%,-50%)'
}
const close_korzina = ()=>{
  const menu_usr = document.getElementsByClassName("UOw")[0];
  const img = document.getElementsByClassName("Korzina_full")[0];
  img.style = 'transform:translate(-100%,-50%)'
}


const open_man = ()=>{
  const menu_usr = document.getElementsByClassName("UOw")[0];
  const img = document.getElementsByClassName("User_full")[0];
  img.style = 'transform:translate(0%,-50%)'
}
const close_man = ()=>{
  const menu_usr = document.getElementsByClassName("UOw")[0];
  const img = document.getElementsByClassName("User_full")[0];
  img.style = 'transform:translate(100%,-50%)'
}




    return (
        <nav style={{borderRadius:"10px",marginBottom:'10px'}} className="navbar navbar-expand-lg bg-body-tertiary daw">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Flovers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Store</a>
  </li>
 
  <li className="nav-item">
    <a className="nav-link"  href="#">Link</a>
  </li>
   <li className="nav-item">
   <div onClick={errors} ><a className="nav-link disabled" href="#">Our AI Flowers </a></div> 
  </li>
</ul>
<IconUser className={'icon_usr'} onClick={()=>seto_menu(!o_menu)}/>
<IconBasket className={'fw'}  onClick={()=>seto_korz(!o_korz)}/>
     </div>
            </div>
        </nav>
    );
}

export default OP;