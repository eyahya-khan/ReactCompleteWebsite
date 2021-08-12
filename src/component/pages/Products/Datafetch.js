import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Datafetch() {
    const [posts, setPost] = useState([]);
    // fetching all data data from API
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
        <div>
           <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> 
        </div>
    )
}

export default Datafetch
