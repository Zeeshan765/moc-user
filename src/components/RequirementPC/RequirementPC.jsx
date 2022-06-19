import React from "react";
import "./RequirementPC.css";
import PUBG from "../../Assets/PUBG.png";
import GTAV from "../../Assets/GTAV.jpg";
import Apex from "../../Assets/Apex.jpg";

import ReqComp from "./ReqComp";

import {
  getpubgreso,
  getapexfps,
  getapexreso,
  getgtafps,
  getgtareso,
  getpubgfps,
} from "../../Redux/requirementRedux";
import { useSelector } from "react-redux";
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

const RequirementPC = () => {
  const pubgfps = useSelector(getpubgfps);
  const pubgreso = useSelector(getpubgreso);
  const gtafps = useSelector(getgtafps);
  const gtareso = useSelector(getgtareso);
  const apexfps = useSelector(getapexfps);
  const apexreso = useSelector(getapexreso);

  return (
    <>
      <div className="MainContainerReq">
        <Container className="bar">
          <Col xs={12}>
            <h2 className="performance">Available Builds</h2>
          </Col>
        </Container>
        <Container>
          <div className="reqdata">
            <ReqComp />
          </div>

          <Container className="bar1">
            <Col xs={12}>
              <p className="performance1"> Estimated Performance</p>
            </Col>
          </Container>

          <div className="gameimages">
            <Container>
              <Row>
                <Col sm>
                  <Card
                    style={{ width: "17rem" }}
                    className="card text-white"
                    id="GamecardStyle"
                  >
                    <Card.Img
                      src={PUBG}
                      className="GameimgStyle"
                      variant="top"
                      alt=""
                    />
                    <Card.Body>
                      <Card.Text>
                        <div className="gameS">
                          <p>Average FPS</p>
                          <h3 className="pubgfps"> {pubgfps}</h3>
                          <p>Resolution</p>
                          <h3>{pubgreso} </h3>
                        </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                  </Card>
                </Col>

                <Col sm>
                  <Card
                    style={{ width: "17rem" }}
                    className="card text-white"
                    id="GamecardStyle"
                  >
                    <Card.Img
                      src={GTAV}
                      className="GameimgStyle"
                      variant="top"
                      alt=""
                    />
                    <Card.Body>
                      <Card.Text>
                        <div className="gameS">
                          <p>Average FPS</p>
                          <h3> {gtafps}</h3>
                          <p>Resolution</p>
                          <h3> {gtareso}</h3>
                        </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                  </Card>
                </Col>

                <Col sm>
                  <Card
                    style={{ width: "17rem" }}
                    className="card text-white"
                    id="GamecardStyle"
                  >
                    <Card.Img
                      src={Apex}
                      className="GameimgStyle"
                      variant="top"
                      alt=""
                    />
                    <Card.Body>
                      <Card.Text>
                        <div className="gameS">
                          <p>Average FPS</p>
                          <h3> {apexfps}</h3>
                          <p>Resolution</p>
                          <h3> {apexreso}</h3>
                        </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <hr></hr>
        </Container>
      </div>
    </>
  );
};

export default RequirementPC;
