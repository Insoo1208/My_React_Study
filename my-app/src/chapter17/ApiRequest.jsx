import { useState } from "react";
import axios from "axios";

function ApiRequest(props) {
  // 서버에서 가져온 데이터를 담을 state
  const [data, setData] = useState(null);

  // 1. Promise/then
  // const handleRequestById = id => {
  //   // JSONPlaceholder에서 제공하는 테스트용 API호출
  //   axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  //     .then(response => setData(response.data)) // Axios 라이브러리가 JSON => object/array 변환 작업을 자동으로 해줌
  //     .catch(console.error); // 요청 실패 한 경우 에러 핸들링
  // };
  
  // 2. async/await
  const handleRequestById = async id => {
    try{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const {  } = props;
  return (
    <>
      <div>
        <button type="button" onClick={() => handleRequestById(2)}>불러오기</button>
      </div>
      {data && 
        <div>
          <textarea cols={70} rows={8} value={JSON.stringify(data, null, 2)} readOnly />
          <p>{data.title}</p>
          <img src={data.thumbnailUrl} alt="Thumbnail" />
        </div>
      }
    </>
  );
}

export default ApiRequest;

// 자바스크립트를 이용하여 서버 쪽 데이터를 필요로 할 때에는
// Ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신
// Ajax: 비동기 자바스크립트와 XML

// Ajax를 쓰는 다양한 방법
// 1. XMLHttpRequest(XHR) 객체 - 잘 안씀
// 2. fetch() 함수 - ES6차의 HTTP 요청 함수
// 3. axios 외부 라이브러리(가장 많이 사용)

// Axios 라이브러리 설치
// npm install axios
// 기본 사용법
// axios.get('url').then();