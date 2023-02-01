// 개념 설명만을 위한 예제
function PropsEx(prams) {
  return <Toolbar theme='dark'/>;
}

function Toolbar(props) {
  const {theme} = props;

  // Toolbar 컴포넌트는 theme prop을 받아서 themedButton에 전달해야 함
  // 앱 안의 모든 버튼이 테마를 알아야 한다면 이 정보를 일일이 넘기는 과정은 비효율적
  // 특히 트리 구조가 깊어질수록 매우 비효율적임
  // 이런 과정을 Prop Drilling 이라고 부름(프로터피 내리꽂기)
  return (
    <div>
      <ThemedButton theme={theme}/>
    </div>
  );
}

function ThemedButton(props) {
  const {theme} = props;

  return <Button theme={theme}/>;
}

function Button(props) {
  
}

export default PropsEx;