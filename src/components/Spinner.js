import React from 'react'

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-10">
      <div className="loader"></div>
    </div>
  )
}

export default Spinner;