import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function header() {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>AmmarShop</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<LinkContainer to="/card">
								<Nav.Link>
									<i className="fas fa-shopping-cart"></i>Cart
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>
									<i className="fas fa-user"></i> LogIn
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default header;

// <nav class="navbar navbar-light bg-light">
//   <form class="form-inline">
//     <button class="btn btn-outline-success" type="button">Main button</button>
//     <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
//   </form>
// </nav>
