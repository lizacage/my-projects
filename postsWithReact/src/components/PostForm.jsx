import React, { useState } from "react";
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const PostForm = ({create}) => {
    const empty = {
      title: "No title",
      body: "No description"
    }
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        }

        {post.title !== '' || post.body !== '' 
          ? create(newPost)
          : alert("Пост не должен быть пустым")
          }
        
        setPost({title: '', body: ''});
      } 

      

    return (
        <form>
          <MyInput value={post.title} 
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Название поста"
          />
          <MyInput value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}          
          type="text" 
          placeholder="Описание поста"/>
          <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;