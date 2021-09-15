import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title, Input, Button} from './StyledComponent';

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
      <Input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <Button onClick={handleClick}>Click to Fetch</Button>
      <Title><strong>Title:</strong> {post.name}</Title>
      <Title><strong>Email:</strong> {post.email}</Title>
      <Title><strong>Body:</strong> {post.body}</Title>
    </>
  );
}

export default DatafetchClick;