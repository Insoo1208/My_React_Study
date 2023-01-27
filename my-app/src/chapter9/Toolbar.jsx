const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    borderBottom: '1px solid gray',
  },
  greeting: {
    marginRight: 8,
  },
}

function Toolbar(props) {
  const {isLoggedIn, onClickLogin, onClickLogout} = props;

  return (
    <div className='red wrapper' style={styles.wrapper}>
    {isLoggedIn
      ? (
        <>
          <button onClick={onClickLogout}>Log out</button>
          <span style={styles.greeting}>Welcome!</span>
        </>
      )
      : <button onClick={onClickLogin}>Log in</button>
    }
    </div>
  );
}

export default Toolbar;

// Quiz:
//  로그인, 로그아웃 버튼을 누를 때 인사말이 나오고 안나오고
//  버튼 내용도 로그인 로그아웃 바뀌도록