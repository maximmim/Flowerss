import Lkorz from "./list_korz";


const Korzina = () => {

    return ( 
        <div className="Korzina_full">
            <div className="plaw">
<h2 className="Koshik">Кошик</h2>

<div className="korzina_list">
<Lkorz/>
</div>
<button className="Korzina_fwa">Придабати все</button>
</div>

        </div>
     );
}
 
export default Korzina;