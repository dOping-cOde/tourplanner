import React, { useState } from 'react'
import './Card.css'
const Card = ({id, image, name, info, price, removeTour}) => {
       
    const [readmore, setReadmore] = useState(false);
    const description =   `${info.substring(0, 200)}...`;
    
    function readmoreHandler(){
        setReadmore(!readmore);
    }

  return (
    <div className='card'>
        <img src={image} alt="Location"/>
        <h4>{name}</h4>
        <p> Rs.{price}</p>
        <div>
               {
                readmore? info : description
               }
              <span onClick={readmoreHandler}>
                {readmore?`show less`:`read more`}
              </span>
            </div>

            <button className="btn" onClick={()=>removeTour(id)}>Not Interested</button>
    </div>
  )
}

export default Card;