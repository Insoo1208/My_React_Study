import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: calc(100% - 32px);
  height: ${props => props.height && props.height + 'px'};
  padding: 16px;
  line-height: 20px;
`;

function TextInput(props) {
  const { height, value, onChange } = props;
  return (
    <StyledTextArea height={height} value={value} onChange={onChange}/>
  );
}

export default TextInput;