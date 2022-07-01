
import React from 'react';
import 'bootstrap' ;
import {Navbar,Container} from 'react-bootstrap';
import {
  MDBIcon,
} from 'mdb-react-ui-kit';

const Navbarpage=()=>{
    return (
        <div> 
<Navbar>
  <Container>
    <Navbar.Brand href="#home">  CARs  </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='tiktok' />
          </a>

      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
export default Navbarpage