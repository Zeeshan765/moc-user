import React from "react";
import { useDispatch } from "react-redux";
import { addPSU } from "../../../Redux/cartRedux";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./customCards.css";

function PSUComp({ product }) {
  const dispatch = useDispatch();
  return (
    <>
     <Container className="ProcessorCards">
        <Row>
          {Array.from({ length: 1 }).map((_, id) => (
            <Col xs={1} md={12}>
              <Card
                style={{ width: "22rem" }}
                className="card text-white"
                id="CustomcardsCustomS"
              >
                <Card.Img
                  className="imgStyle"
                  variant="top"
                  src={product.picture}
                  alt=""
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <h4>{product.price} pkr</h4>
                    <p>{product.description}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    className="card-btn"
                    onClick={() => {
                      dispatch(addPSU(product));
                    }}
                  >
                    Add
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
    // <>
    //   <div className="card-container">
    //     <div className="card-upper-part">
    //       <img src={product.picture} alt="" />
    //     </div>
    //     <div className="card-lower-part">
    //       <h3>{product.name}</h3>
    //       <h4>{product.price}</h4>
    //       <p>{product.description}</p>
    //       <button
    //         className="view-btn"
    //         onClick={() => {
    //           dispatch(addPSU(product));
    //         }}
    //       >
    //         Add
    //       </button>
    //     </div>
    //   </div>
    // </>
  );
}

export default PSUComp;
