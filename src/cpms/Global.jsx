import { useEffect, useState } from "react";
import g_dw from "../img/flower-shop-6763936_1280.jpg";
import g_dw2 from "../img/pexels-olly-947914.jpg";

import g_dw3 from "../img/1660609899_1-kartinkin-net-p-fon-dlya-tsvetochnogo-magazina-krasivo-1.jpg";
import OP from "./Nav_bar";

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
const G_img = () => {
    const [img,setImg] = useState(null)
    useEffect(()=>{
        let l = random(0,2);
        if(l===0) {
            setImg(g_dw)
        }
        else if (l===1) {

            setImg(g_dw2)
        }
        else {
            setImg(g_dw3)
        }
        
        setInterval(()=>{
            let l = random(0,2);
            if(l===0) {
                setImg(g_dw)
            }
            else if (l===1) {
    
                setImg(g_dw2)
            }
            else {
                setImg(g_dw3)
            }
       
            
        },random(15*1000,20*1000))
        
    },[])
    return (
        <div className="image-container">
            <OP/>
            
            <img className="dwa" src={img} alt="global_img" />
            <div className="overlay-text">
            Ваші ідеальні квіти
            </div>
        </div>
    );
}

export default G_img;