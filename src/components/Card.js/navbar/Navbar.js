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
                            <Nav.Link href="projects-list">Projects List</Nav.Link>
                            <Nav.Link href="/">Numbers</Nav.Link>
                            <Nav.Link href="/">Text</Nav.Link>
                            <Nav.Link href="/">Networking</Nav.Link>
                            <Nav.Link href="/">Classes</Nav.Link>
                            <Nav.Link href="/">Threading</Nav.Link>
                            <Nav.Link href="/">Web</Nav.Link>
                            <Nav.Link href="/">Files</Nav.Link>
                            <Nav.Link href="/">Databases</Nav.Link>
                            <Nav.Link href="/">Graphics and Multimedia</Nav.Link>
                            <Nav.Link href="/">Games</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </BootstrapNavbar.Offcanvas>
            </Container>
        </BootstrapNavbar>
    );
}