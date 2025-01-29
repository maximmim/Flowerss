import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'bootstrap/js/dist/toast';
import Carousel from 'bootstrap/js/dist/carousel';
import IconBasket from '../cpms/kawdk'
import N_but from './bottom_nvg';
import Modal_ai from './modal_help';



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

const Shop = () => {
    const [flowers, setFlowers] = useState([]);

    
    function openToast(el) {
        localStorage.notification = JSON.stringify({
            g_text:`Ваші ${el.name} додано в корзину`,
            header:"Корзина",
            color:el.clr_button
        })

        
        

        const toastLiveExample = document.getElementById('liveToast');
        const toastBootstrap = new Toast(toastLiveExample);
        toastBootstrap.show();
        let storage = localStorage.getItem('storage');
        storage = JSON.parse(storage);
        storage.push(el)
        localStorage.storage = JSON.stringify(storage)
    }

    useEffect(() => {
        get("https://644ab0e4a8370fb32155be44.mockapi.io/flowers")
            .then(items => {
                setFlowers(items);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        flowers.forEach((_, index) => {
            const carouselElement = document.getElementById(`carouselExampleFade${index}`);
            if (carouselElement) {
                new Carousel(carouselElement);
            }
        });
    }, []);

    return (
        <div className='Shop'>




            <div className="row row-cols-1 row-cols-md-3 g-4">
                {flowers.map((el, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
                            <div id={`carouselExampleFade${index}`} className="carousel slide carousel-fade">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={"flowers" + el.img[0]} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={"flowers" + el.img[1]} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleFade${index}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleFade${index}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                                <div className="fe">
                                    <p>Кольори:</p>
                                    {el.color_mix && el.color_mix.map((color, idx) => (
                                        <div key={idx} style={{ backgroundColor: color }} className='color_ball'></div>
                                    ))}
                                </div>
                                <p className="card-text">Кількість: {el.length}</p>
                            </div>
                            <div className="card-footer">
                                <div className="text-body-secondary">
                                    <button
                                        style={{ backgroundColor: el.clr_button, border: `1px solid ${el.clr_button}`, color: el.clr_button_text }}
                                        type="button"
                                        onClick={()=>{openToast(el)}}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Додати в кошик
                                    </button>
                                    <h3 className='price'>{el.price}<span> грн</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}



            </div>

        </div>
    );
}

export default Shop;