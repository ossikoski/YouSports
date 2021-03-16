import React from 'react'
import { Link } from 'react-router-dom'

import logoSimple from '../img/Yousports_logo_rect_black_middle_ball.png'

const Nav = () => {
    var loggedInUser = null

    if(loggedInUser === null){
        return(
            <div className="nav" style={{ backgroundColor: 'black', display:'flex', alignItems: 'center' }}>
                <Link to="/" style={{ marginRight: 50 }}>
                    <img src={ logoSimple } alt="Simple logo" style={{ height: 80, width: 80 }}/>
                </Link>
                <Link to="/about" style={{marginRight: 50}}>About</Link>
                <Link to="/nba" style={{marginRight: 600}}>NBA</Link>
                <Link to="/login" style={{marginRight: 50}}>Login</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    }else{
        return(
            <div className="nav" style={{ backgroundColor: 'black', display:'flex', alignItems: 'center' }}>
                <Link to="/" style={{ marginRight: 50 }}>
                    <img src={ logoSimple } alt="Simple logo" style={{ height: 80, width: 80 }}/>
                </Link>
                <Link to="/about" style={{ marginRight: 50 }}>About</Link>
                <Link to="/nba" style={{ marginRight: 600 }}>NBA</Link>
                <Link to="/myfeed" style={{ marginRight: 50 }}>{ loggedInUser }</Link>
                <button id="logoutButton">logout</button>
            </div>
        )
    }
}
//    
export default Nav