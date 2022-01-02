import { Container, Navbar as BootstrapNavbar, Offcanvas, Nav } from "react-bootstrap";

export default function Navbar() {
    return (
        <BootstrapNavbar bg="light" expand={false}>
          <Container fluid>
            <BootstrapNavbar.Brand href="/">Home</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="offcanvasNavbar" />
                <BootstrapNavbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Numbers</Nav.Link>
                            <Nav.Link href="#action2">Text</Nav.Link>
                            <Nav.Link href="#action2">Networking</Nav.Link>
                            <Nav.Link href="#action2">Classes</Nav.Link>
                            <Nav.Link href="#action2">Threading</Nav.Link>
                            <Nav.Link href="#action2">Web</Nav.Link>
                            <Nav.Link href="#action2">Files</Nav.Link>
                            <Nav.Link href="#action2">Databases</Nav.Link>
                            <Nav.Link href="#action2">Graphics and Multimedia</Nav.Link>
                            <Nav.Link href="#action2">Games</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </BootstrapNavbar.Offcanvas>
            </Container>
        </BootstrapNavbar>
    );
}