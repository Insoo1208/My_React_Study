import { useRef } from "react";

function FileInput() {
  const fileInput = useRef(null);
  const handleSubmit = () => alert(`file - ${fileInput.current.files[0].name}`);

  return (
    <>
      <label>
        File Upload.
        <input ref={fileInput} type="file" />
        {/* 프로그래밍적으로 값을 설정 할 수 없고 사용자만이 값을 설정할 수 있기 때문에 항상 비제어 컴포넌트 */}
        {/* 파일에 접근하기 위해 DOM 노드의 ref를 만들어 접근 */}
        <br />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </label>
    </>
  );
}

export default FileInput;