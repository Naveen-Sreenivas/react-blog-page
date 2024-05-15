import { useEffect,useState,useContext} from "react";
import { useParams,useNavigate,Link} from "react-router-dom";
import DataContext from "./Context/DataContext";
import api from "./api/posts";
import { format } from "date-fns";

const EditPost = () => {

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
const  {
    posts,setPosts
    } = useContext(DataContext);
const {id} = useParams();
const post = posts.find(post => (post.id).toString() === id)

//EDIT Post

const handleEdit = async (id) =>{
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatePost = { id, title:editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`,updatePost)
setPosts(posts.map(post => post.id === id ? {...response.data} : post));
setEditBody('');
setEditTitle('');
navigate('/');

    } catch (err) {
      console.log(`Error${err.message}`);
    }
  }

useEffect(()=>{
    if(post){
        setEditTitle(post.title);
        setEditBody(post.body);
    }
},[post,setEditBody,setEditTitle]);

  return (
    <main className="NewPost">
   
       <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
              <label htmlFor="postTitle">Title:</label>
              <input
                  id="postTitle"
                  type="text"
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
              />
              <label htmlFor="postBody">Post:</label>
              <textarea
                  id="postBody"
                  required
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
              />
              <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
          </form>
      </main>
  )
}

export default EditPost
 