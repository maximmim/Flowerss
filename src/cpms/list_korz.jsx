import { useEffect, useState } from "react";
import Ekorz from "./elm_list";

async function get(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(response.status);
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

const Lkorz = () => {

    const [List,SetList] = useState([])
    useEffect(()=>{
        if (!localStorage.storage) {
            localStorage.storage = '[]';
        }
        SetList(JSON.parse(localStorage.storage))
    },[])
    return ( 
        <>
            {
                List.map((data,index)=>(
                    <Ekorz key={index} data={data}/>
                ))
            }
        </>
     );
}
 
export default Lkorz;