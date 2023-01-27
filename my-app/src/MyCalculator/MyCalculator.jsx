const keys = [['AC','DEL','%'],[7,8,9,'*'],[4,5,6,'-'],[1,2,3,'+'],[0,'.','=']];
const styles = {
  wrapper: {
    width: 300,
    height: 500,
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid black',
  },
  numButton: {
    margin: "2.5%",
    width: '20%',
    height: 60,
    backgroundColor: 'white',
  },
  acZero: {
    margin: "2.5%",
    width: "45%",
    height: 60,
    backgroundColor: 'white',
  },
  notNum: {
    margin: "2.5%",
    width: '20%',
    height: 60,
    backgroundColor: 'skyblue',
  }
}

function MyCalculator() {
  return (
    <div style={styles.wrapper}>
      {keys.map((row) => {
        return row.map((col) => {
          return <button
            style={
              isNaN(col)
              ? (col === 'AC' ? styles.acZero : styles.notNum)
              : (col === 0 ? styles.acZero : styles.numButton)
            } key={col}>
          {col}</button>
        })
      })}
    </div>
  );
}

export default MyCalculator;