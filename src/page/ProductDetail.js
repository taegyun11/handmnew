import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">₩{product?.price}</div>
          
          <Dropdown className="drop-down">
            <Dropdown.Toggle id="dropdown-basic" title="Size">Select Size</Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
