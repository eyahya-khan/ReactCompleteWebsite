import React, { useState, useEffect } from "react";
import axios from "axios";

function DatafetchClick() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  // fetching single data data from API
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${idFromButtonClick}`)
      .then((res) => {
        // console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  //  [idFeomButtonClick] = for changing title according to id

  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Click to Fetch</button>
      <p>Title: {post.name}</p>
      <p>Email: {post.email}</p>
      <p>Body: {post.body}</p>
    </>
  );
}

export default DatafetchClick;