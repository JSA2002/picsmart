import React, { useState } from 'react'

function Trending() {
  const [res, setRes] = useState([]);
  const fetchTrending = async () => {
    await fetch(`https://api.unsplash.com/search/photos?client_id=JsUwVc08auJSR4SHLTvgB2ia6nTeX5uQqGFwGNgjN4g&per_page=60&query=amazing+insane&orientation=squarish`).then(
      res => res.json()).then(
        data => {
          setRes(data.results)
          console.log(data)
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
            return <img src={e.urls.regular} key={e.id} alt="images" className='images'></img>
          })
        }
      </div>
    </div>
  )
}

export default Trending;