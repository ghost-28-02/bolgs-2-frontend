import { IndexContext } from '../context/IndexContext'
import React, { useContext } from 'react'
import Spinner from './Spinner';
import PostCard from "./PostCard";

const Blogs = () => {

  const { posts, loading } = useContext(IndexContext);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          <p className="text-lg font-medium">No Post Found</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Blogs