import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { IndexContext } from '../context/IndexContext';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';

const BlogPage = () => {

  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(IndexContext);
  const blogId = location.pathname.split("/").at(-1);


  async function fetcfRelatedBlogs() {
    setLoading(true);
    let url = `${process.env.REACT_APP_API_URL_SECOND}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data?.blog);
      setRelatedBlog(data?.relatedBlogs);
    } catch (error) {
      console.log("Error aaya in blog id vale mai");
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetcfRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <button
          onClick={() => navigation("/")}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition-all duration-200"
        >
          ← Back
        </button>

        {loading ? (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        ) : blog ? (
          <div className="space-y-8">
            {/* Main Blog */}
            <PostCard post={blog} />

            {/* Related Blogs */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Related Blogs
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedBlog.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No Blog Found
          </p>
        )}
      </div>
    </div>
  )
}

export default BlogPage