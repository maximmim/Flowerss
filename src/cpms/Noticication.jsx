import { useEffect, useState } from "react";
import Roza from "../img/roza.png"

const Notification = () => {
    const [inform,setInfom] = useState({})
    useEffect(()=>{
       
       
        if(localStorage.notification) {
        setInterval(()=>{

        setInfom(JSON.parse(localStorage.notification));
        },1)

        }
    },[])
    return ( 
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <svg   className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill={inform.color}></rect></svg>
                <strong className="me-auto">{inform.header}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {inform.g_text}
            </div>
        </div>
    </div>
     );
}
 
export default Notification;