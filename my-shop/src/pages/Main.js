import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, selectProduct, getMoreProducts, getMoreProductAsync, selectStatus } from "../features/product/productSlice";
import { useEffect } from "react";
import axios from "axios";

// 서버에서 가져온 데이터라고 가정
import data from '../data.json';

// 리액트(JS)에서 이미지 파일 import
import YonexImg from "../images/yonex.jpg";
import ProductListItem from "../components/ProductListItem";
import { Button } from "react-bootstrap";
import { getProducts } from "../api/productAPI";

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${YonexImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function Main() {
  const dispatch = useDispatch();
  const productList = useSelector(selectProduct);

  // 로딩 만들기 추천: react-spinner, Lottie Files
  const status = useSelector(selectStatus);

  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data));
  }, []);

  const handleGetMoreProducts = async () => {
    const result = await getProducts();
    if (!result) return;
    dispatch(getMoreProducts(result));
  }

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
            {productList.map(product => <ProductListItem key={product.id} product={product} />)}
          </Row>
        </Container>

        {/* More */}
        {/* <Button variant="outline-info" className="mb-4"
          onClick={() => {
            axios.get('http://localhost:4000/products')
              .then(response => {
                dispatch(getMoreProducts(response.data));
              })
              .catch(console.error);
          }}
        >More</Button> */}
        {/* <Button variant="outline-info" className="mb-4"
          onClick={handleGetMoreProducts}
        >More</Button> */}
        <Button variant="outline-info" className="mb-4"
          onClick={() => dispatch(getMoreProductAsync())}
        >More</Button>
        {/* 위 HTTP 요청 코드를 함수로 만들어서 api 폴더로 추출하고 async/await로 바꾸기 */}
        {/* thunk를 이용한 비동기 작업 처리하기 */}
      </section>
    </>
  );
};

export default Main;

// json-server
// 실무와 비슷한 느낌으로 하기 위해 가짜 API 서버를 만듦
// json 파일 하나만 있으면 연습용 서버를 쉽게 구성 가능
// npx json-server ./src/data2.json --port 4000