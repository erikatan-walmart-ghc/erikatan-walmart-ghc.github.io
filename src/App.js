import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import {
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
        <Navbar sticky="top" bg="light">
          <Navbar.Brand href="/">
            Walmart GHC Code Challenge
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
                <Link to="/about" className="custom-nav-link">About</Link>
            </Nav.Link>
          </Nav>
        </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
