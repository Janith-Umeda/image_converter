import { Container, Navbar } from "react-bootstrap";

export default function NavBar(){
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="shadow">
        <Container>
          <Navbar.Brand href="">Online Image Converter</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="https://github.com/Janith-Umeda/image_converter">GitHub</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}