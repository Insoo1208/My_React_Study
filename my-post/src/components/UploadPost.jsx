function UploadPost(props) {
  const {newPost, setNewPost, posts, setPosts, countPost, setCountPost} = props;

  return (
    <div className="upload-post">
      <p>Upload New Post</p>
      <div className="wrapper">
        <label>
          Title :
          <input className='inputBox' type="text" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})}/>
        </label>
      </div>
      <div className="wrapper">
        <label>
          Date: 
          <input className='input-box' type="text" value={newPost.date} onChange={e => setNewPost({...newPost, date: e.target.value})}/>
        </label>
      </div>
      <div className="wrapper">
        <label>
          author: 
          <input className='input-box' type="text" value={newPost.author} onChange={e => setNewPost({...newPost, author: e.target.value})}/>
        </label>
      </div>

      <button type='button' onClick={() => {
        setPosts([{...newPost, id:`${countPost}`}, ...posts]);
        setNewPost({title: '', date: 'Jan 1, 2023', author: 'Insoo', id: '', likeCount: 0});
        setCountPost(countPost => countPost + 1);
      }} disabled={!(newPost.title ?? false)}>Upload</button>
    </div>
  );
}

export default UploadPost;