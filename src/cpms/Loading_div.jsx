import { useEffect } from "react";
import Loading from "./Loading";




const Loading_cenger = () => {
    useEffect(()=>{
        localStorage.load = true;
        document.getElementsByClassName("Head")[0].style = "display:block"

        document.getElementsByClassName("Floter")[0].style = "display:block"

        document.getElementsByClassName("Ldg_cent")[0].style = "display:none"
    },[])
    return ( 
        <div className="Ldg_cent">
            {/* <Loading/> */}
        </div>
     );
}
 
export default Loading_cenger;