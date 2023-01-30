// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기

import { useState } from "react";

const styles = {
  inputBox: {
    marginLeft: 5,
  },
  button: {
    display: 'block',
    marginLeft: 5,
    marginTop: 5,
  },
}

// 1. 이름 입력받기
// name이라는 state 정의
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 함수 정의

// 2. 성별 입력받기
// gender라는 state 정의
// select 태그에는 총 두가지 옵션이 들어감(남자, 여자)
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 함수 정의

// 3. 출력
// 이름과 성별을 입력하고 버튼을 누를 시 alert 창으로 입력된 이름과 성별 출력하기

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    gender: 'male',
  });

  const {userName, gender} = userInfo;

  const handleChangeInfo = e => {
    const {name, value} = e.target;
    setUserInfo(userInfo => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const handleSubmit = () => alert(`이름: ${userName}, 성별: ${gender}`);

  return (
  <>
    <label>
      이름:
      <input style={styles.inputBox} name='userName' type="text" value={userName} onChange={handleChangeInfo}/>
    </label>
    <br />
    <label>
      성별:
      <select style={styles.inputBox} name='gender' value={gender} onChange={handleChangeInfo}>
        <option value="male">남자</option>
        <option value="female">여자</option>
      </select>
    </label>
    <button style={styles.button} type="button" onClick={handleSubmit}>가입하기</button>
  </>
  );
}

export default SignUp;