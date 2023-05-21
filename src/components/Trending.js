import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Trending() {
  const [res, setRes] = useState([]);
  const fetchTrending = async () => {
    await fetch(`https://api.unsplash.com/search/photos?client_id=JsUwVc08auJSR4SHLTvgB2ia6nTeX5uQqGFwGNgjN4g&per_page=60&query=nature+scenary&orientation=squarish`).then(
      res => res.json()).then(
        data => {
          setRes(data.results)
          console.log(data)
          console.log(`${data.results[0].urls.full}&dl=${data.results[0].user.first_name}-${data.results[0].user.last_name}-${data.results[0].id}-unsplash.jpg`)
        })

  }
  return (
    <div>
      <div className='centre trenback'>
        <button className='button' onClick={fetchTrending}>Click to view trending images</button>
      </div>
      <div className='galleryTrending trenback'>
        {
          res.map((e) => {
            return (<div key={e.id} className='beforeImages'>
              <img src={e.urls.regular} alt="images" className='images'></img>
              <button className='downloadbtn'><Link style={{ textDecoration: 'none', color: '#fff' }} to={`${e.urls.regular}&dl=${e.user.first_name}-${e.user.last_name}-${e.id}-unsplash.jpg`}> Download</Link></button>
            </div>)
          })
        }

      </div>
    </div>
  )
}

export default Trending;