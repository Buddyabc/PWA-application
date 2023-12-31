
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <>
          <Navbar bg="dark" data-bs-theme="dark">
           <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
            <Nav.Link><Link to={"/about"}>About</Link></Nav.Link>
            <Nav.Link><Link to={"/user"}>User</Link></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

   
    </>
  );
}

export default Navbar1;