import { useEffect } from "react"
import vaza from "../img/vaza.png"
import water from "../img/water_biil.png"

const A_load_1 = () => {


useEffect(()=>{
if (localStorage.load !== "true") {
const water = document.getElementsByClassName("water_anim")[0]
const vaza = document.getElementsByClassName("vaza_anim")[0]
water.style.opacity = "1";
vaza.style.opacity = "1"

water.style.transform = "translate(20px,10px) rotate(0deg)"
vaza.style.transform = "translate(80px,95px)"
}
else {

    const water = document.getElementsByClassName("water_anim")[0]
    const vaza = document.getElementsByClassName("vaza_anim")[0]

    
    water.style.transform = "translate(0px,0px) rotate(45deg)"
    vaza.style.transform = "translate(0px,0px)"

}
},[])


    return ( 
        <>
        <img src={vaza} id="vaza" className="vaza_anim"/>
        <img src={water} id="water" className="water_anim"/>
        </>
     );
}
 
export default A_load_1;