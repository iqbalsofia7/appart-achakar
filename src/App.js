import { useState } from 'react';
import './App.css'
import CarouselComp from './component/Carousel_comp.js';
import Pics from './component/Pics.js';
function App() {

    const [readMore, setReadMore] = useState(false)
    let changeRead =()=>{
        setReadMore(!readMore)
    }

return (
    <div className="App">
        <div className='hdr'>
            <h1>À  Louer : Appartement à Tanger</h1>
            
        </div>
        <div className='mrg'>
            <div className='header'>
                <h2>Appartement à louer - Achakar</h2>
                <div className='flex'>
                    <p>50€/j en basse saison - 90€/j en haute saison</p>
                </div>
                <hr />
            </div>
        </div>
        <div className='mrg'>
            <CarouselComp />
        </div>

        <div className='description mrg'>
            <h2>Description</h2>
            <div>
                <p>Pour un couple non-fumeur avec maximum 2 enfants</p>

                <p>Bienvenue dans cet appartement situé à Achakar, à seulement 8 minutes en voiture de l'aéroport et à 5 minutes de marche de la magnifique plage. Niché au sein d'une résidence sécurisée équipée de caméras de surveillance, cet espace offre une oasis de tranquillité et de confort.</p>
                                
                { readMore && <><p>Dès votre arrivée, vous serez séduit par les installations de loisirs de la résidence, comprenant 2 piscines et une balançoire pour les plus jeunes voyageurs. L'appartement lui-même est conçu pour offrir un séjour inoubliable, avec une chambre confortable, un canapé-lit spacieux pour deux personnes, ainsi qu'un lit supplémentaire et un lit pliable pour bébé, assurant un hébergement flexible pour tous les membres de votre groupe.</p>
                
                <p>Le salon spacieux est idéal pour se détendre après une journée bien remplie, équipé d'une télévision pour des soirées cinéma confortables. La cuisine hyper équipée offre tout ce dont vous avez besoin pour préparer des repas délicieux, avec en prime une machine à laver pour votre commodité.</p>
                
                <p>Profitez de l'air frais et de la vue imprenable sur la mer depuis la grande terrasse, aménagée avec une banquette confortable et une table pour vos repas en plein air. Avec seulement 30 minutes en voiture pour rejoindre le centre-ville, vous pouvez facilement explorer toutes les attractions de la région tout en bénéficiant d'un havre de paix loin de l'agitation urbaine.</p> </> }
                <p onClick={changeRead} className='blue'>{readMore ? "Voir moins" : "Voir plus"}</p>
                
            </div>
        </div>

        <div className='pics'>
            <Pics />
        </div>

        <div className='tableau mrg'>
            <h2>Spécificités</h2>
            <div className='block'>
                <p className='title' ><b>Tarif :</b></p>
                <p className='desc'>50€/jour en basse saison - 90€/jour en haute saison</p>
            </div>
            <div className='block'>
                <p className='title' ><b>Disponibilité :</b></p>
                <p className='desc'>A partir du 1er Mars 2024</p>
            </div>
            <div className='block'>
                <p className='title' ><b>Nombre de chambre à coucher :</b></p>
                <p className='desc'>1</p>
            </div>
            <div className='block'>
                <p className='title' ><b>Nombre de salle de bain :</b></p>
                <p className='desc'>1</p>
            </div>
            <div className='block'>
                <p className='title' ><b>Terrasse aménagée :</b></p>
                <p className='desc'>Oui</p>
            </div>
            <div className='block'>
                <p className='title' ><b>Piscine :</b></p>
                <p className='desc'>Oui (2)</p>
            </div>
            <h2>Autres</h2>
            <div className='badges'>
                <div className='block-bis'>
                    <p className='title-bis' ><b>🍽️ Cuisine équipée</b></p>
                </div>
                <div className='block-bis'>
                    <p className='title-bis' ><b>📷 Caméra de surveillance</b></p>
                </div>
                <div className='block-bis'>
                    <p className='title-bis' ><b>🏊 2 Piscines</b></p>
                </div>

            </div>
            <h2>Proximité</h2>
            <div className='badges'>
            <div className='block-biss'>
                    <p className='title-bis' ><b>🛫 8 min de l'aéroport</b></p>
                </div>
                <div className='block-biss'>
                    <p className='title-bis' ><b>🌊 5 min de la mer</b></p>
                </div>
                <div className='block-biss'>
                    <p className='title-bis' ><b>🏙️ 30 min (en voiture) du centre-ville</b></p>
                </div>
            </div>
        </div>

        <div className='contact'>
            <p>Pour prendre Contact ou tout autre renseignement : <span><b> <u>aniana265@hotmail.com</u></b></span></p>
        </div>
    </div>
);
}

export default App;
