import { useEffect, useState } from 'react';
import { Container, Col, Row, Button, Alert, Form, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled, { keyframes } from 'styled-components';
import TabContents from '../components/TabContents';
import { addCart } from '../features/cart/cartSlice';

// 서버에서 받아온 데이터라고 가정
// import data from "../data.json";
import { getProductById, selectProduct, selectedProduct } from '../features/product/productSlice';

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
`;

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc }
  50% { background-color: #e8f7fa }
  to { background-color: #cff4fc }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail() {
  // useParams() 사용하여 productId 가져오기
  const { productId } = useParams();

  const dispatch = useDispatch();

  const data = useSelector(selectProduct);
  const product = useSelector(selectedProduct);

  const [show, setShow] = useState(true);
  const [orderCount, setOrderCount] = useState(1);
  const [showTabIndex, setShowTabIndex] = useState(0);

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    // ... api call ...
    const foundProduct = data.find(product => product.id === productId);
    dispatch(getProductById(foundProduct));
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    // 불필요하게 타이머가 계속 생기는 것을 정리
    return () => {
      clearTimeout(timeout);
    }
  }, []);

  // product가 없을 경우에
  if (!product) {
    // return null;
    return <h1 className='pt-5'>404 Not Found</h1>;
  }

  const handleChangeOrderCount = e => {
    if (isNaN(e.target.value)) {
      toast.error('Enter only numbers');
      return;
    }
    setOrderCount(Math.max(e.target.value, 1));
  };
  
  return (
    <>
      <Container className='pt-3'>
        {/* 처음에 info 띄우고 3초 뒤에 사라지게 만들기 */}
        {show && <StyledAlert variant='info' onClose={() => setShow(false)} dismissible>
          34 users watching this product
        </StyledAlert>}
        <Row>
          <StyledCol md={6}>
            <img src={product.imagePath} alt={product.title} width="100%" height="100%" />
          </StyledCol>
          <StyledCol md={6}>
            <h4>{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price} &#8361;</p>
            <Col md={4} className="mx-auto mb-3">
              <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
            </Col>
            <Button variant="outline-primary">Order</Button>
            <Button variant='outline-dark' onClick={() => {dispatch(addCart({id: product.id, title: product.title, price: product.price, count: orderCount}))}}>Cart</Button>
          </StyledCol>
        </Row>

        {/* 탭 UI */}
        {/* defaultActiveKey: 기본으로 active 할 탭, active 클래스가 들어가있음 */}
        <Nav className='my-3' variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={() => { setShowTabIndex(0); }}>상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => { setShowTabIndex(1); }}>리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => { setShowTabIndex(2); }}>Q&amp;A</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={() => { setShowTabIndex(3); }}>반품/교환정보</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* 탭의 내용을 다 만들어놓고 조건부 렌더링하면 됨 */}
        {/* 방법 1: 삼항 연산자 */}
        {/* {showTabIndex === 0
          ? <div> 탭 내용 1 </div>
          : showTabIndex === 1
            ? <div> 탭 내용 2 </div>
            : showTabIndex === 2
              ? <div> 탭 내용 3 </div>
              : <div> 탭 내용 4 </div>
        } */}

        {/* 방법 2: 컴포넌트로 추출  */}
        {/* <TabContents showTabIndex={showTabIndex}/> */}

        {/* 방법 3: 배열이나 객체 형태로 만들어서 조건부 렌더링 */}
        {/* 배열 형태 */}
        {/* {
          [
            <div> Tab Content 1 </div>,
            <div> Tab Content 2 </div>,
            <div> Tab Content 3 </div>,
            <div> Tab Content 4 </div>
          ][showTabIndex]
        } */}
        {/* 객체 형태 */}
        {
          {
            0: <div> Tab Content 1 </div>,
            1: <div> Tab Content 2 </div>,
            2: <div> Tab Content 3 </div>,
            3: <div> Tab Content 4 </div>,
          }[showTabIndex]
        }

      </Container>
    </>
  );
};

export default ProductDetail;