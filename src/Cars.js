
import React from 'react';
import 'bootstrap' ;
import Car from './Car';

const Cars=(props)=>{ 
    
// Help Me ...!!
      const getName = (price, name) => {
        alert(`You have to pay ${props.price} to buy ${props.name} ! `);
      };
    
    return (
        // Car 
      <Car
      name={"test"} 
      price={123 }  
      getName={getName} 
      >
      </Car>
    )
}
export default Cars