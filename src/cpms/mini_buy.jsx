

const Minu_b = ({el}) => {
    return ( 
        <>
        <div className="ipo"><p>{el.name}</p>
        <div className="ipo_img"><img src={"flowers" + el.img[0]}/></div>
        </div>
        </>
     );
}
 
export default Minu_b;