import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

let nav = props.user ? 
<div>
  <Link to='/high-scores'>High Scores</Link>
  <Link to='/login' onClick={props.handleLogout}>Log Out</Link>
  <span>Welcome, {props.user.name}</span>
  {/* If the user exists, we want to display all of this, if the user does not exist, we want to return a div that says log in */}
</div>
:
<div>
  <Link to='/login'>Log In</Link>
  <Link to='/signup'>Sign Up</Link>
</div>

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;