import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon sx={{ fontSize: 80 }} className="header__icon" />
            </IconButton>
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/en/7/7c/Final_Space_Logo.png" alt="header" />
            <IconButton>
                <ForumIcon sx={{ fontSize: 80 }} className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header