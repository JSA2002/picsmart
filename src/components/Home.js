import React, { useState } from 'react'

function Home() {
  const [count, setCount] = useState(1);
  //fetched image unsplash 60perhour
  const [res, setRes] = useState([])
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const fetchImagesUn = async () => {
    await fetch(`https://api.unsplash.com/search/photos?client_id=JsUwVc08auJSR4SHLTvgB2ia6nTeX5uQqGFwGNgjN4g&per_page=60&query=${value1}+${value2}+${value3}+${value4}&orientation=squarish`).then(
      res => res.json()).then(
        data => {
          setRes(data.results)
          console.log(data)
        })
  }

  const fetchImage = () => {
    fetchImagesUn()
  }
  return (
    <>
      <div className='home'>
        <div className='head'>
          <h2 id='heading'>Stunning royalty free images</h2>
          <h4 id='subheading'>Search for all types of images with keywords</h4>
        </div>
        <div className='inputMn'>
          {<input type="text" className='inputSearch' placeholder='keyword1' value={value1} onChange={(e) => { setValue1(e.target.value) }} />}
          {(count > 1) && <input type="text" className='inputSearch' placeholder='keyword2' value={value2} onChange={(e) => { setValue2(e.target.value) }}/>} <br />
          {(count > 2) && <input type="text" className='inputSearch' placeholder='keyword3' value={value3} onChange={(e) => { setValue3(e.target.value) }}/>}
          {(count > 3) && <input type="text" className='inputSearch' placeholder='keyword4' value={value4} onChange={(e) => { setValue4(e.target.value) }}/>}
        </div>
        <div className='search'>
          {(count < 4) && <span onClick={() => { setCount(count + 1) }}><svg id='addButton' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#fff' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg></span>}
          <button type='submit' className='button' onClick={fetchImage}>Search</button>
          {(count > 1) && <span onClick={() => { setCount(count - 1) }}><svg id='addButton' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#fff' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg></span>}
        </div>
      </div>
      <div className='gallery'>
        {
          res.map((e)=>{
            return <img src={e.urls.regular} key={e.id} alt="images" className='images'></img>
          })
        }
      </div>
    </>
  )
}

export default Home