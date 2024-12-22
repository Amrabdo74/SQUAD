import React from 'react'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const NavPage = ({ pageTitle, circleText, circleContainer, homeIcons, color }) => {
    return (
        <div className={`${circleContainer} circle-container d-flex align-items-center`}>
            <Link to="/" className={`home-icons ${homeIcons}`} aria-label='home page'>
                <FaHome className={` ${color} fs-1`} />
            </Link>
            <Link to="#" className="d-flex align-items-center">
                <IoIosArrowForward className={`fs-2 arrow-icons ${color}`} />
                <span className={`${circleText} circle-text`}>{pageTitle}</span>
            </Link>
        </div>
    )
}

export default NavPage;