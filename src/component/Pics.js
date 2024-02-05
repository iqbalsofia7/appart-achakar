import React, { useState } from 'react';
import img1 from './img/context.jpg'
import img2 from './img/context_2.jpg'
import img3 from './img/living_room_1.jpg'
import img4 from './img/living_room_2.jpg'
import img5 from './img/living_room_3.jpg'
import img6 from './img/living_room_4.jpg'
import img7 from './img/living_room_5.jpg'
import img8 from './img/living_room_6.jpg'
import img9 from './img/bedroom.jpg'
import img10 from './img/bedroom2.jpg'
import img11 from './img/bedroom3.jpg'
import img12 from './img/bedroom_5.jpg'
import img13 from './img/ext_1.jpg'
import img14 from './img/ext_2.jpg'
import img15 from './img/ext_3.jpg'
import img16 from './img/ext_4.jpg'
import img17 from './img/ext_5.jpg'
import img18 from './img/hall.jpg'
import img19 from './img/pool.jpg'
import img20 from './img/context.jpg'
import img21 from './img/context_2.jpg'

function Pics(props) {

    let tab = [img3, img2, img19, img16, img1, img4, img5, img18, img15, img6, img7, img8, img9,img20, img21, img10, img11, img12, img13, img14, img17]

    

    return (
        <div className='gallery'>
            { tab.map((item, index)=>(
                <img key={index} src={item}  />
            ))}
            

        </div>
    );
}

export default Pics;