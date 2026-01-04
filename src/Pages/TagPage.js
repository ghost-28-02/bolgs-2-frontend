import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-5xl mx-auto px-4 pt-6">
        {/* Top Section */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={() => navigation("/")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition-all duration-200"
          >
            ← Back
          </button>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Blogs Tagged{" "}
            <span className="text-blue-600 font-bold">#{tag}</span>
          </h2>
        </div>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default TagPage