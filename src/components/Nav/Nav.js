import React, {useState, useEffect} from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Nav() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

    const [show, handleShow] = React.useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return() => window.removeEventListener('scroll', transitionNavBar) } , []);


  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
            <img className='nav_logo'
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo' />
            <ul className="nav_list"> 
                <li className="nav_item"> <Link to="/">Inicio</Link></li>
                <li className="nav_item"> <Link to="/series">Series</Link></li>
                <li className="nav_item"> <Link to="/peliculas">Películas</Link></li>
                <li className="nav_item"> <Link to="/trending">Novedades populares</Link></li>
                <li className="nav_item"> <Link to="/list">Mi lista</Link></li>
            </ul>
            <div className="nav_icons">
            <Link to="/search" className="nav_search"> <SearchIcon /> </Link>
            <Link to="/notifications" className="nav_notifications"> <NotificationsIcon /> </Link>
            <button className="nav_button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                ><img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'></img></button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
           
            </div>

           
            
        </div>
    </div>
  )
}

export default Nav