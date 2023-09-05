
import Card from './Card'
import React from 'react'
import './Tours.css';
const Tours = ({tours, removeTour}) => {
  return (
    <div className='tours'>
        <div>Tour Planner</div>
        <div>
            {
        tours.map((tour)=>{
            return <Card {...tour} removeTour={removeTour}/>
        })
            }
        </div>
    </div>
  )
}

export default Tours