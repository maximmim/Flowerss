import { useEffect, useState } from "react";
import Minu_b from "./mini_buy";


const Shop_dw = () => {
    const [storage,setStorage] = useState([])
    useEffect(()=>{

        if (localStorage.storage) {
            setStorage(JSON.parse(localStorage.storage));
        }
    },[localStorage.storage])
    return ( 
        <div className="Sop_modal">
            {localStorage.storage && (
                storage.map((el,index)=>(
                    <Minu_b key={index} el={el}/>
                ))
            )}
        </div>
     );
}
 
export default Shop_dw;