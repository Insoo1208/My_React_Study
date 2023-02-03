import { useNavigate } from "react-router-dom";

function NoMatchPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 Not Found</h1>
      <button type="button" onClick={() => {
        navigate('/')
      }}>Main</button>
    </div>
  );
}

export default NoMatchPage;