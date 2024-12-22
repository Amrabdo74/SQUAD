import React from 'react'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { CiBellOn, CiLogin } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import screenfull from 'screenfull'; // Import screenfull here

const Navbar = () => {
  const toggleFullScreen = () => {
    if (screenfull.isEnabled) {
        screenfull.toggle();
    }
};
  return (
    <div className='p-2 d-flex justify-content-between'>
     <Link className='text-dark' to="/admin/home"> <FaHome />
     </Link>
     <div>
     <CiBellOn  className='fs-2 mx-2'/>
     <AiOutlineFullscreen  className='fs-2 mx-2 cursor-pointer'onClick={toggleFullScreen} />
     <CgProfile  className='fs-2 mx-2'/>
     <CiLogin className='fs-2 mx-2' />

     </div>

    </div>
  )
}

export default Navbar