import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const StyledCol = styled(Col)`
  cursor: pointer;
`;
// 방법 2: GlobalStyle에 공통 스타일로 작성

function ProductListItem(props) {
  const { product: { id, title, price, imagePath } } = props;
  const navigate = useNavigate();

  return (
    <StyledCol md={4}>
      <img src={imagePath} alt={title} width="80%"
      // 이동 경로 설정
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      />
      <h4>{title}</h4>
      <p>{price} &#8361;</p>
    </StyledCol>
  );
};

export default ProductListItem;