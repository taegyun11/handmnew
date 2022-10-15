import React, { useEffect, useState } from "react";
import { Col, Container, Row, Grid } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";



const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query,setQuery] = useSearchParams()
  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    let url = `https://my-json-server.typicode.com/taegyun11/handmnew/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row className="mobile-productCard">
          {productList.map((menu) => (
            <Col className="product-card-position" sm={12} lg={3} >
              <ProductCard  item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
