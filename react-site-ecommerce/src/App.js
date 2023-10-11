import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styles
import './App.css';

// Assets
import logoPanier from "./assets/paniers.png";

// Context
import {DetailsContext} from "./components/DetailsContext"

// Components
import ShoppingList from './components/ShoppingList/ShoppingList';
import Cart from './components/Cart/Cart';


function App() {

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <div className="App">

      <DetailsContext.Provider value={[isDetailsVisible, setIsDetailsVisible]}>

        <Router>
          <Navbar bg='dark' variant='dark'>
            <Container>

              <Navbar.Brand href='/'>Navbar</Navbar.Brand>

              <Nav className='me-auto'>
                <Nav.Link href='/'>Shopping List</Nav.Link>
                <div className='logoCart'>
                  <Nav.Link href='/panier'>Panier <img src={logoPanier} alt='logoPanier' /></Nav.Link> 
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

      </DetailsContext.Provider>

      

    </div>
  );
}
 
export default App;
