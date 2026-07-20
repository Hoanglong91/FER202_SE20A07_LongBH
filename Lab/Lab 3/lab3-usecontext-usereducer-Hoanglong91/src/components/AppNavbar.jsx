import { Navbar, Container, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';

function AppNavbar() {
  const { state, dispatch } = useAuth();
  const { user } = state;

  if (!user) {
    return null;
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Auth App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-3 text-white">
            Xin chào, <strong>{user.name}</strong>
          </Navbar.Text>
          <Button 
            variant="outline-light" 
            onClick={() => dispatch({ type: 'LOGOUT' })}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
