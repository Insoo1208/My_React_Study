const keys = [['AC','DEL','%'],[7,8,9,'*'],[4,5,6,'-'],[1,2,3,'+'],[0,'.','=']];
const styles = {
  wrapper: {
    width: 300,
    height: 500,
    display: 'flex',
    flexWrap: 'wrap',
  },
  numButton: {
    width: '25%',
    height: 100,
    backgroundColor: 'white',
  },
  acZero: {
    width: "50%",
    height: 100,
    backgroundColor: 'white',
  },
  notNum: {
    width: '25%',
    height: 100,
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