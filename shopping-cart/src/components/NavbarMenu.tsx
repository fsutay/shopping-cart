import { Button, Container, Nav, Navbar, Offcanvas, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Cart } from "../interface/interface";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartItemComponent from "./cart-item";

const NavbarMenu = () => {
  const { cartItems } = useSelector((state: { cart: Cart }) => state.cart);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const total = cartItems.reduce((accumulator, item) => {
    const itemPrice = item.discountPercentage
      ? (item.price - (item.price * item.discountPercentage) / 100)
      : item.price;
    const itemTotal = itemPrice * item.quantity;

    return accumulator + itemTotal;
  }, 0).toFixed(2);

  return (
    <Navbar className="bg-white shadow-sm">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          onClick={handleShow}
          style={{
            position: "relative",
            width: "3rem",
            height: "3rem",
          }}
          className="rounded-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: "white",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            {cartItems.length}
          </div>
        </Button>
        <Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Stack style={{ gap: "3" }}>
              {cartItems.map((item) => (
                <CartItemComponent
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                  quantity={item.quantity}
                  thumbnail={item.thumbnail}
                  name={item.name}
                />
              ))}
              <div>
                Total {total}$
              </div>
            </Stack>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
