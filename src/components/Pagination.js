import { IndexContext } from "../context/IndexContext";
import React, { useContext } from "react";

const Pagination = () => {
  const {page,totalPages,handlePageChange} = useContext(IndexContext)

  

  return (
    <footer className="w-full bg-white/80 backdrop-blur-sm shadow-sm border-t border-gray-200 sticky bottom-0 z-20">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center items-center space-x-6">
        
        {/* Prev Button */}
        <button
          onClick={()=> handlePageChange(page-1)}
          disabled={page === 1}
          className="px-5 py-2 rounded-lg font-medium text-gray-600 border border-gray-300 hover:bg-gray-100 disabled:opacity-40 transition"
        >
          Prev
        </button>

        {/* Page Info */}
        <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 tracking-wide">
          Page {page} of {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={()=> handlePageChange(page+1)}
          disabled={page === totalPages}
          className="px-5 py-2 rounded-lg font-medium text-gray-600 border border-gray-300 hover:bg-gray-100 disabled:opacity-40 transition"
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default Pagination;