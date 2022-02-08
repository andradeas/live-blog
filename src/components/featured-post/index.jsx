import React from "react";
import {Link} from "react-router-dom";
import AuthorBadge from "../author-badge/index";

import "./styles.css";

export default function FeaturedPost({post}){
  return (
    <div className="featured-post-container">
      <div>
        <img className="featured-post-image"src={post?.hero?.data?.attributes?.formats?.medium?.url} alt="Paisagem" />
      </div>
      <div>
        <p className="featured-post-date">{post.date}</p>
        <Link to="#">
          <h2 className="featured-post-title">{post.title}</h2>
        </Link>
        <p className="featured-post-description">{post.description}</p>
        <AuthorBadge />
      </div>
    </div>
   
  )
}