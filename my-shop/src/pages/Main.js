import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, selectProduct } from "../features/product/productSlice";
import { useEffect } from "react";

// 서버에서 가져온 데이터라고 가정
import data from '../data.json';

// 리액트(JS)에서 이미지 파일 import
import YonexImg from "../images/yonex.jpg";

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${YonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`;

function Main() {
  const product = useSelector(selectProduct);

  const dispatch = useDispatch();
  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data));
  }, []);

  return (
    <>
      {/* Main Img Section */}
      <section>
        <MainBackground />
      </section>

      {/* Product List Section */}
      <section>
        <Container>
          <Row>
            {product.map(item => (
              <Col key={item.id} md={4}>
                <img src={item.imagePath} alt={item.title} width="80%" />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </Col>
            ))}
            {/* <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" alt="productThumbnail" width="80%" />
              <h4>Product Name</h4>
              <p>price</p>
            </Col>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" alt="productThumbnail" width="80%" />
              <h4>Product Name</h4>
              <p>price</p>
            </Col>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" alt="productThumbnail" width="80%" />
              <h4>Product Name</h4>
              <p>price</p>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;