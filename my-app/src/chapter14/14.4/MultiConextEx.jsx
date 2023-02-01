const ThemeContext = React.createContext('light');

// 로그인한 유저 정보를 담는 UserContext
const UserContext = React.createContext({
  name: 'Guest'
});

function MultiContextEx(props) {
  const { signedInUser, theme } = props;

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout(props) {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

function Content(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme}/>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default MultiContextEx;