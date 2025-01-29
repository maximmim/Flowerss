import React, {useEffect, useState} from 'react';
const Ekorz = ({data}) => {
    const [color,setColor] = useState(1);

    const dynamicStyle = {
        backgroundColor: data.color_mix[color],
        color: data.clr_button_text

    };
    return ( 
        <div className="E_korz_element">
            <h2 className="E_korz_title">{data.name}</h2>
            <b className="E_korz_price">{data.price+" ₴"}</b>
            <button style={dynamicStyle} className="E_korz_button">Купити</button>
            <img className="E_korz_img" src={"flowers"+data.img[0]} alt="flower_foto" />
        </div>
     );
}
 
export default Ekorz;