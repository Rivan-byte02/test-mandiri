import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  const route = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(route);
  }, [])

  return (
    <div className='navbar_container'>
      <p
        onClick={() => navigate("/")} 
        className={`${route.pathname === '/' ? 'active' : ''}`}>Home</p>
      <p
        onClick={() => navigate("/coin-list")} 
        className={`${route.pathname === '/coin-list' ? 'active' : ''}`}>Coin List</p>
    </div>
  )
}
