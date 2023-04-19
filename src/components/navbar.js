import React,{useState} from 'react'
import { Link } from "react-router-dom";




function Navbar() {
    const[drop,setDrop] = useState(false);
    function dropshow(){
        setDrop(!drop);
    }
    
    return (
        <>
            <header>
                <div className="navbar">
                    <div><Link to="/" className='alink logo'>PicsMart</Link></div>
                    <ul className='links'>
                        <li><Link className='alink' to="/">Home</Link></li>
                        <li><Link className='alink' to="/trending">Trending</Link></li>
                        <li><Link className='alink' to="/contact">Contact Us</Link></li>
                    </ul>
                    <Link className="alink action_btn" to="/generate">Generate Image</Link>
                    <div className='toggle_btn' onClick={dropshow}>
                        <svg className='toggle' xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </div>
                </div>
                {drop && <div className="dropdown_menu">
                    <li><Link className='alink' to="/">Home</Link></li>
                    <li><Link className='alink' to="/trending">Trending</Link></li>
                    <li><Link className='alink' to="/contact">Contact Us</Link></li>
                    <li><Link className="action_btn alink" to="/generate">Generate Image</Link></li>
                </div>}
            </header>
        </>
    )
}

export default Navbar;