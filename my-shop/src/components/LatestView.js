import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectProduct } from "../features/product/productSlice";

const LatestViewWrapper = styled(Card)`
  position: fixed;
  top: 100px;
  right: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .25);
  width: 8rem;
`;

function LatestView() {
  const productList = useSelector(selectProduct);
  const latestViewed = JSON.parse(localStorage.getItem('latestViewed'));
  const latestViewedProducts = latestViewed?.map(id => productList.find(product => product.id === id));
  // Optional Chaining에 의해 undefined 반환

  if (productList.length < 1 || !latestViewedProducts) return null;

  return (
    <LatestViewWrapper>
      <Card.Header>Recently Viewed</Card.Header>
      <ListGroup variant="flush">
        {latestViewedProducts.map((product, index) => (
          <React.Fragment key={product.id}>
            <img src={product.imagePath} alt={`img-${index}`} />
            <ListGroup.Item className='text-ellipsis' style={{ cursor: 'default' }}>{product.title}</ListGroup.Item>
          </React.Fragment>
        ))}
      </ListGroup>
    </LatestViewWrapper>
  );
};

export default LatestView;