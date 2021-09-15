import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Products.css'

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
           <ol>
        {posts.map((post) => (
          <li key={post.id}>
            { post.title}
            <hr></hr>
          </li>
        ))}
      </ol> 
        </div>
    )
}

export default Datafetch
