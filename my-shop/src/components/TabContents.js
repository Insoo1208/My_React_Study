function TabContents(props) {
  const { showTabIndex } = props;

  let tabContent;
  // if (showTabIndex === 0) {
  //   tabContent = <div>탭 내용 1</div>
  // } else if (showTabIndex === 1) {
  //   tabContent = <div>탭 내용 2</div>
  // } else if (showTabIndex === 2) {
  //   tabContent = <div>탭 내용 3</div>
  // } else if (showTabIndex === 3) {
  //   tabContent = <div>탭 내용 4</div>
  // };

  switch (showTabIndex) {
    case 0:
      tabContent = <div>탭 내용 1</div>
      break;
    case 1:
      tabContent = <div>탭 내용 2</div>
      break;
    case 2:
      tabContent = <div>탭 내용 3</div>
      break;
    case 3:
      tabContent = <div>탭 내용 4</div>
      break;
  
    default:
      tabContent = null;
      break;
  }

  return (
    <div>
      {tabContent}
    </div>
  );
};

export default TabContents;