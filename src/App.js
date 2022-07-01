import Navbarpage from './Navbarpage';
import Cars from './Cars';
import Car from './Car';
import Footer from './Footer';
import 'bootstrap' ;
import 'mdbreact/dist/css/mdb.css'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import './App.css';


function App(props) {

// Help Me ...!!
    const getName = (price ,name) => {
        alert(`You have to pay  ${props.price}  to buy ${props.name} ) !`);
      };

  return (
    <div className="App">
{/* Navbar */}
      <Navbarpage/>

      {/* Cars */}
      <div className='main'>
        <Cars
         name={Car.name} 
         price={Car.price }  
         getName={getName} 
        >  </Cars>
      </div>
{/* Footer */}
      <Footer/>

    </div>
  );
}

export default App;
