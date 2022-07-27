import React, { useState, useRef, useMemo, useEffect } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";
import MyModal from "./ui/my_modal/MyModal";
import MyButton from "./ui/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "../API/PostServise";
import Loader from "./ui/loader/Loader";
import { useFetching } from "./hooks/useFetching";

function Main() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div>
        <hr style={{margin: '15px 0'}}></hr>
        <MyButton  onClick= {() => setModal(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}></hr>
        <PostFilter 
          filter={filter}
          setFilter={setFilter}
        />
        {postError &&
            <h1>Произошла ошибка</h1>
            }
        {isPostsLoading
            ? <Loader/>
            : <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов"/> 
        }
    </div>
  );
}

export default Main;
