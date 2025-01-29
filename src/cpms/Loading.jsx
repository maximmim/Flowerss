import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import A_load_1 from '../animation/anim_1_load';

const Loading = () => {

    useEffect(()=>{
        
        let i = 0;
        const y =setInterval(()=>{
            i++;
            
            document.getElementById("aw").style.width = i+"%"
            if (i>=100) {
                clearInterval(y);
                i=0;
                setTimeout(()=>{

                localStorage.load = true;
                document.getElementsByClassName("Head")[0].style = "display:block"

                document.getElementsByClassName("Floter")[0].style = "display:block"

                document.getElementsByClassName("Ldg_cent")[0].style = "display:none"
            },800)
            }
        },13)
    },[])
    return ( 
        <>
    <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div id='aw' className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '0%' }}></div>
    </div>
    <div className='Anim'>
        <A_load_1/>
    </div>
        </>
      
     );
}
 
export default Loading;