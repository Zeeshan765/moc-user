import React from "react";
import { useHistory } from "react-router";

import "./SingleLowBudget.css";
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

//import cooler from "../../../Assets/cooler.jpg";
const SingleLowBudget = ({ product }) => {
  console.log(product.category);
  const id = product._id;
  const history = useHistory();

  //View Detail Click Function
  const handleView = () => {
    console.log(id);
    // window.location.href = '/productdetail/' + id;
    //history.push('/productdetail');
    history.push("/productdetail/" + id);
  };

  return (
    <>
      <Row >
        {Array.from({ length: 1 }).map((_, id) => (
          <Col xs={4}>
            <Card
              style={{ width: "22rem" }}
              className="card text-white"
              id="cardStyleLB"
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
                  <h4> Rs. {product.price}</h4>
                  <p style={{ fontSize: "15px" }}>{product.description}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={handleView} className="card-btn">
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SingleLowBudget;
