import React from "react";
import { NavLink } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div
      className="p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
    >
      {/* Title */}
      <NavLink to={`/blog/${post.id}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 cursor-pointer">
          {post.title}
        </h2>
      </NavLink>

      {/* Author & Category */}
      <p className="text-sm text-gray-500 mb-3">
        By{" "}
        <span className="font-semibold text-indigo-600">{post.author}</span>{" "}
        on{" "}
        <NavLink to={`/categories/${post.category?.replaceAll(" ","-")}`}>
          <span className="font-medium text-gray-700 cursor-pointer">
            {post.category}
          </span>
        </NavLink>
        
      </p>

      {/* Date */}
      <p className="text-xs text-gray-400 mb-4">
        Posted on {post.date}
      </p>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-4">
        {post.content}
      </p>

      {/* Tags */}

      <div className="flex flex-wrap gap-2">
        {post?.tags?.map((tag, index) => (
          <NavLink to={`/tags/${tag?.replaceAll(" ","-")}`}>
            <span
              key={index}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium cursor-pointer"
            >
              #{tag}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PostCard;