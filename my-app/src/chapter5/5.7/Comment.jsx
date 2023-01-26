// CSS style (인라인 스타일로 넣을 객체 형태)
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

// 사용할 이미지 경로
// https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png

function Comment(props) {
  return (
    <div>
      {/* 프로필 이미지 */}
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            style={styles.image}
          />
        </div>

        {/* 댓글 작성자와 내용 */}
        <div style={styles.contentContainer}>
          <span style={styles.nameText}>{props.name}</span>
          <span style={styles.commentText}>{props.comment}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;