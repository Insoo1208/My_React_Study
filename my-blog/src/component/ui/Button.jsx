import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  border: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick } = props;

  return (
    <StyledButton onClick={onClick}>
      {title || '버튼'}
    </StyledButton>
  );
}

export default Button;