import React from 'react'
import { useNavigate } from 'react-router-dom'



export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
        <button className='btn btn-warning' onClick={() => navigate(-1)}>Back</button>
    <div className='w-25 mx-auto'>
      <img width="100%" height="100%" src="http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" alt="Not found 404" />
    </div>
    </div>
  )
}
