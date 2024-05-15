import { useNavigate,useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
import api from './api/posts';

const PostPage = () => {
    const {posts,setPosts} = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    const navigate = useNavigate();

    //DELETE Post 

  const handleDelete = async (id) => {
    
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
    } catch (err) {
      console.log(`Error${err.message}`);
    }
  }
    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button className="deleteButton"  onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>

                        <Link to={`/post/edit/${id}`}><button className="editButton">Edit Post</button></Link>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Go to Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage