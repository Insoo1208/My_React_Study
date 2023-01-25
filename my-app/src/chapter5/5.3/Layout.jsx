function Layout(props) {
  console.log(props);
  return (
    <>
      {props.header}
      레이아웃 크기는 가로 {props.width}px, 세로 {props.height}px입니다.
      {props.footer}
    </>
  );
}

export default Layout;