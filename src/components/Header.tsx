import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={scrolled ? 'scrolled header' : 'header'}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" alt="logo" src="assets/images/logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#experiences"
                className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('experiences')}
              >
                Experiences
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('contact')}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
