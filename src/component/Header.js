import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import '../style/header.css'

function Header() {
const navigate = useNavigate();

  return (
    <Navbar className='k' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand ><Link to = "/">Navbar scroll</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">

          </Nav>
          <div className="flex">
            <Button variant="secondary" onClick={ () => {navigate("/login")}}>Log in</Button>
            <Button variant="primary" onClick={ () => {navigate("/manage")}}>Manage</Button>
            <Button variant="secondary" onClick={ () => {navigate("/register")}}>Sign up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;