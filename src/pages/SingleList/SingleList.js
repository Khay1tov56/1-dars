import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./single.css"


export const SingleList = () => {
    const [posts, setPosts] = useState([])
    const { name } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
      isLoading: true,
      data: [],
      isError: false,
    })

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/name/' + name)
    .then(response => response.json())
    .then(json => setPosts(json[0]))
    }, [name]);

    console.log(posts);
    return (
      <div className='container wrap'>
       
        <button className='btn btn-warning' onClick={() => navigate("/")}>Back</button>

        {posts.length !== 0 && 
        
        <div className='d-flex align-items-start justify-content-around'>
         <img src={posts.flags.svg} width="500" height="200" alt="" />
         <div className="text-wrap text-center">
            <h2>{posts.name.official}</h2>
         <p className='fw-bold parag'>Region: <br />{posts.name.common}</p>
         <p className='fw-bold parag'>Currency: <br /> `{Object?.keys(posts.currencies).join(", ", " ")}`</p>
         <p className='fw-bold parag'>Borders: <br />{posts?.borders.join(", ", " ")}</p>
         <p className='fw-bold parag'>Languages: <br /> `{Object?.values(posts.languages).join(", ", " ")}`</p>
         <p className='fw-bold parag'>Subregion: <br />`{posts.subregion}</p>

         </div>
        </div>
       
        }
      </div>
    )
}
