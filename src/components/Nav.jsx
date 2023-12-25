import React from 'react'
import { NavLink } from 'react-router-dom';


const Nav = () => {


  return (
    <nav>
  <NavLink className={(e)=>{return e.isActive?"active":''}} to="/">
    <svg viewBox="0 0 100 100">
      <g transform="translate(10 5) scale(0.8 0.9)">
        <path d="M 0 30 v 70 h 100 v -70 l -50 -30 z" stroke="currentColor" strokeWidth="10" fill="none"
          strokeLinejoin="round" strokeLinecap="round" />
      </g>
    </svg>
    <span>
      Home
    </span>
  </NavLink>

  <NavLink to="/create" className={(e)=>{return e.isActive?"active":''}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor"></path></svg>
    <span>
      Create
    </span>
  </NavLink>

  <NavLink to="/list" className={(e)=>{return e.isActive?"active":''}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" fill="currentColor"></path></svg>
    <span>
      List
    </span>
  </NavLink>
</nav>
  )
}

export default Nav