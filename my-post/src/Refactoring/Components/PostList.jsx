function PostList(props) {
  const { posts } = props;
  return (
    <div>
      {posts.map(post => <PostItem key={post.id} post={post}/>)}
    </div>
  );
}

export default PostList;