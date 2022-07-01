
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer=()=>{
    return (
        <div> 
 <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>سجل للحصول على اخر اخبارنا</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>الإشتراك</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Challenge React Props:{' '}
        <a className='text-dark' href='#'>
          hajir-alsaleh.com
        </a>
      </div>
    </MDBFooter>
        </div>
    )
}
export default Footer