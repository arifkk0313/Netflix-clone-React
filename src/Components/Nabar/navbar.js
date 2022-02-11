import "./navbar.css"
import React from 'react'

function navbar() {
  return (
    <div className='navbar'>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />

<div className="items">
        <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Series</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Originals</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Recently Added</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My list</a>
      </li>

      </div>
    </div>
  )
}

export default navbar