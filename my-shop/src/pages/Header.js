import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Outlet } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
  <>
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Insoo's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')} >Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
    <Outlet />
  </>
  );
}

export default Header;