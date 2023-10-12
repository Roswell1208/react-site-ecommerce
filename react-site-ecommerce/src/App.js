import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styles
import './App.css';

// Assets
import logoHome from "./assets/home.png";
import logoPanier from "./assets/paniers.png";

// Context
import { DetailsContext } from "./components/DetailsContext";
import { CartQuantityContext } from "./components/CartQuantityContext";

// Components
import ShoppingList from './components/ShoppingList/ShoppingList';
import Cart from './components/Cart/Cart';


function App() {

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  // Récupère la quantité de produits dans le panier
  const getCartQuantity = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const quantities = Object.values(cart).map(item => item.quantity);
    const totalQuantity = quantities.reduce((total, quantity) => total + quantity, 0);
    return totalQuantity;
};

  const [cartQuantity, setCartQuantity] = useState(getCartQuantity);

  return (
    <div className="App">

      <DetailsContext.Provider value={[isDetailsVisible, setIsDetailsVisible]}>

        <CartQuantityContext.Provider value={[cartQuantity, setCartQuantity]}>

          <Router>
            <Navbar bg='dark' variant='dark'>
              <Container>

                <Navbar.Brand href='/'>Shopping List</Navbar.Brand>

                <Nav className='me-auto'>
                  <div className='logoHome'>
                    <Nav.Link href='/'>Home <img src={logoHome} alt='logoHome' /></Nav.Link>
                  </div>
                </Nav>

                <Nav>
                  <div className='logoCart'>
                    <Nav.Link href='/panier'>Cart <img src={logoPanier} alt='logoPanier' /> {cartQuantity > 0 && cartQuantity}</Nav.Link> 
                  </div>
                </Nav>
              </Container>
            </Navbar>

            <Routes>
              <Route path='/' exact element={<ShoppingList />} />
              <Route path='/panier' element={<Cart />} />
              <Route render={() => <h1>404: page not found</h1>} />
            </Routes>
          </Router>

        </CartQuantityContext.Provider>

      </DetailsContext.Provider>

      

    </div>
  );
}
 
export default App;
