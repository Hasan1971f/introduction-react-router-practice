import { Link, useNavigate,  } from "react-router-dom";


const Post = ({post}) => {
  const {id, title} = post

  const navigate = useNavigate()

 

  const postStyle = {
    border: "2px solid green",
    padding: "5px",
    borderRadius: "20px",
    backgroundColor: "white",
     color: "red"

}
const handleShowClick=()=>{
    navigate(`/post/${id}`)
}
  return (
        <div style={ postStyle}>
            <h4>Post of id:{id}</h4>
            <p>{title}</p>
           <Link to={`/post/${id}`}>Post Detail</Link>
           <Link to={`/post/${id}`}><button >show Details</button></Link>
           <button onClick={handleShowClick}>Click to see detail</button>
           
        </div>
    );
};

export default Post;