import React from 'react'
import { FaBriefcase, FaHome, FaRegNewspaper, FaRegUser } from 'react-icons/fa'
import { IoIosContacts } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Navmobile = () => {
  return (
    <div className="nav__menu shadow">
      <ul className="nav__list d-flex list-unstyled p-0 m-0">
        <li className="nav__item">
          <NavLink to="/about" data-section="about" className="nav__link about">
            <FaRegUser />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/" data-section="home" className="nav__link active__link home">
            <FaHome />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact" data-section="contact" className="nav__link contact">
            <IoIosContacts />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navmobile