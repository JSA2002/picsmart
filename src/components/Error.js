import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <div className='errorimg'></div>
      <h2 className='error1'>ERROR 404 - PAGE NOT FOUND</h2>
      <button className='button' style={{backgroundColor:'white',marginTop:'15px'}}><Link to="/picsmart" style={{textDecoration:'none',color:'black'}}>Back to Home</Link></button>
    </div>
  )
}

export default Error