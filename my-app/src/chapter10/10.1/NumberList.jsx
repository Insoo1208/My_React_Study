function NumberList(props) {
  const {numbers} = props;
  const listItem = numbers.map((number, index) => <li key={index}>{number}</li>);
  return (
    <ul>{listItem}</ul>
  );
}

export default NumberList;