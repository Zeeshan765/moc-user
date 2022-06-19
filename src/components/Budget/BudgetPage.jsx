import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router";
import budget1 from "../../Assets/budgetpc1.jpg";
import budget2 from "../../Assets/budgetpc2.png";
import budget3 from "../../Assets/budgetpc3.png";
import "./BudgetPage.css";
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

const BudgetPage = () => {
  //const history = useHistory();

  /* Click on Budget Box It Navigate to budget page */
  // const handlelowbudget = () =>{
  // history.push ('/budget/lowbudget');

  //    }
  return (
    <div className="budget-container">
      <Container>
        <div className="budget-title">
          <h1 className="TextStyleBudget">Select The Budget Range</h1>
        </div>
        <div>
          <>
            <Container className="budget-wrapper">
              <Row>
                <Col >
                  <Link
                    to="/budget/lowbudget"
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      style={{ width: "20rem" }}
                      className="card text-white bg-secondary"
                      id="CustomCardBudget"
                    >
                      <Card.Img
                        className="imgStyle"
                        variant="top"
                        src={budget1}
                      />
                      <Card.Body>
                        <Card.Title className="cardTitle">
                          Low Budget
                        </Card.Title>
                        <Card.Text>
                          <h3 className="cardDesc">Budget Range</h3>
                          <h4 className="cardDesc">
                            40,000 pkr ------ 55,000 pkr
                          </h4>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>

                <Col >
                  <Link
                    to="/budget/midbudget"
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      id="CustomCardBudget"
                      style={{ width: "20rem" }}
                      className="card text-white bg-secondary"
                    >
                      <Card.Img
                        className="imgStyle"
                        variant="top"
                        src={budget2}
                      />
                      <Card.Body>
                        <Card.Title className="cardTitle">
                          Mid Range Budget
                        </Card.Title>
                        <Card.Text>
                          <h3 className="cardDesc">BudgetRange</h3>
                          <h4 className="cardDesc">
                            60,000 pkr ------ 80,000 pkr
                          </h4>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>

                <Col>
                  <Link
                    to="/budget/highbudget"
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      id="CustomCardBudget"
                      style={{ width: "20rem" }}
                      className="card text-white bg-secondary"
                    >
                      <Card.Img
                        className="imgStyle"
                        variant="top"
                        src={budget3}
                      />
                      <Card.Body>
                        <Card.Title className="cardTitle">
                          High End Budget
                        </Card.Title>
                        <Card.Text>
                          <h3 className="cardDesc">BudgetRange</h3>
                          <h4 className="cardDesc">90,000+ pkr</h4>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Container>
          </>
        </div>
      </Container>
    </div>
  );
};

export default BudgetPage;
