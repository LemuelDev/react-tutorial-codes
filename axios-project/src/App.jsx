import { useEffect, useState } from "react";
import "./App.css";
import {
  fetchPosts,
  createPost,
  deletePost,
  updatePost
} from "./services/apiService";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postData = await fetchPosts();
      setPosts(postData);
    };

    getPosts();
  }, []);

  const handleUpdatePost = async (id) => {
    const updatedPost = {
      title: 'Updated Post',
      body: 'This is an updated post.',
      userID: 1
    }

    const newPost = await updatePost(id, updatedPost);
    setPosts(posts.map((p) => p.id === id ? newPost : p))
  }

  const handleDeletePost = async (id) => {
     await deletePost(id)
    setPosts(posts.filter((p) => p.id !== id ))
  }

  const handleCreatePost = async () => {
    const newPost = {
      title: 'New Post',
      body: 'This is a new post..',
      userId: 1,
    }
    const post = await createPost(newPost)
    setPosts([post, ...posts])

  }
  
  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-header">Posts</h1>
        <button className="button button-create" onClick={handleCreatePost}>Create</button>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.body}</p>

            <button className="button button-update" onClick={() => handleUpdatePost(post.id)}>
              Update
            </button>

            <button className="button button-delete" onClick={() => handleDeletePost(post.id)}>
                Delete
           </button>

          </div>
          
        ))}
      </div>
    </div>
  );
}

export default App;