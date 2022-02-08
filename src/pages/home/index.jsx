import React, {useState, useEffect } from "react";
import FeaturedPost from "../../components/featured-post/index";
import PostList from "../../components/post-list/index";

export default function Home(){
  const [posts, setPosts] = useState();

  async function getPosts(){
    const response = await fetch("https://cms-blog-tutorial.herokuapp.com/api/posts?populate=*");

    const data = await response.json();

    setPosts(data.data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      {
        posts && posts.length > 0 && <FeaturedPost post={posts[0].attributes}/>
      }
      

      <PostList posts={posts}/>
    </div>
  )
}