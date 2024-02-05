import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from './img/ext_2.jpg'
import img2 from './img/bedroom.jpg'
import img3 from './img/kitchen.jpg'
import img4 from './img/living_room_5.jpg'
import img5 from './img/living_room_1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Carousel_comp(props) {
    return (
        <Carousel className='main-slide'>
            <div>
                <img src={img1} width={500} height="auto" />
                <p className="img">Terrasse avec vue sur la mer</p>
            </div>
            <div>
                <img src={img4}  width={500} height="auto"/>
                <p className="img">Salon</p>
            </div>
            <div>
                <img src={img2}  width={500} height="auto" />
                <p className="img">Chambre lit simple & canapé-lit 2 personnes et un lit pour bébé pliable </p>
            </div>
            <div>
                <img src={img3}  width={500} height="auto"/>
                <p className="img">Cuisine équipée</p>
            </div>

            <div>
                <img src={img5}  width={500} height="auto"/>
                <p className="img">Salon avec TV</p>
            </div>
        </Carousel>
    );
}

export default Carousel_comp;

//Résidence avec surveillance caméra 2 piscines, balançoire pour enfants jardin 
//Appartement avec une chambre Avec un canapé-lit de 2 personnes plus un lit d'une personne et un lit pliable bébé. 
//Un grand salon avec TV une cuisine hyper équipé plus une machine à laver 
//une grande terrasse vue sur la mer avec une banquette et une table pour vos repas à 30 minutes en voiture du centre ville .