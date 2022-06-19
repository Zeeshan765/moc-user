import React, { useState } from "react";
import "./LowBudgetPage.css";
import SingleLowBudget from "./SingleLowBudget";
import apiService from "../../../services/ApiService";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
const LowBudgetPage = (props) => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    apiService.getBuild().then((res) => {
      setProducts(res.data);

      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="midbudget-container">
      <h1 className="mainheadingBudget">Low Budget PCs</h1>
          {products
            .filter((product) => product.category === "low budget")
            .map((product, index) => (
              <SingleLowBudget key={index} product={product} />
            ))}
        
      </div>
    </>
  );
};

export default LowBudgetPage;
