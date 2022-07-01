
import React from 'react';
import 'bootstrap' ;
import {Button} from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle,
    MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';

    import Imagesrc from "./img/caa1.jpg";
    import Imagesrc2 from "./img/caa2.jpeg";
    import Imagesrc3 from "./img/caa3.png";

const Car=(props)=>{
        
    // Arrary of object 
    const cars = [
        {
          name: "toyota",
          price:58900,
          src: <img src={Imagesrc} alt="toyota logo" style={{ margin: "112px", width:"220px"}} />,
          buut: <Button  variant="primary"  onClick={() => props.getName(props.price, props.name )} >
          PAY CAR..!!</Button>
          },
        {
          name: "Mercedes",
          price:985000,
          src:<img src={Imagesrc2} alt="Mercedes logo" style={{ margin: "112px" , width:"260px"}} />,
          buut: <Button  variant="primary"  onClick={() => props.getName(props.price, props.name )} >
          PAY CAR..!!</Button>
          },
        {
          name: "Hyundai",
          price:476500,
          src:<img src={Imagesrc3} alt="Hyundai logo" style={{ margin: "112px" , width:"260px"}} />,
          buut: <Button  variant="primary"  onClick={() => props.getName(props.price, props.name )} >
          PAY CAR..!!</Button>
          },
      ];

    return (
        // {/* list of cars */}
   
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                 {cars.map((car, i) => (
                 <div key={i}>
           <MDBCol>
             <MDBCard className='h-100'>   
               <MDBCardTitle> {car.src} </MDBCardTitle>
               <MDBCardBody>
                {car.name}
             </MDBCardBody>
                <MDBCardFooter>
             {car.price}  <br></br> {car.buut}
                </MDBCardFooter>    
                </MDBCard>
        </MDBCol>
        </div>
          ))}
          {/* total */}
            <h2> TOTAL: {cars.reduce((s, car) => s + car.price, 0)}</h2>
        </MDBRow>    
    )
}
export default Car