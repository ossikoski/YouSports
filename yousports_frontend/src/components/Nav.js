import React from 'react'
import { Link } from 'react-router-dom'

import useWindowSize from '../utils/useWindowSize.js'

import logoSimple from '../img/Yousports_logo_rect_black_middle_ball.png'

const Nav = () => {
    const { width } = useWindowSize()
    var loggedInUser = null

    if(loggedInUser === null){
        return(
            <div className="nav" style={{ backgroundColor: 'black', display:'flex', alignItems: 'center' }}>
                <Link to="/" style={{ marginRight: 50 }}>
                    <img src={ logoSimple } alt="Simple logo" style={{ height: 80, width: 80 }}/>
                </Link>
                <Link to="/about" style={{marginRight: 50}}><span>About</span></Link>
                <Link to="/nba" style={{marginRight: width - 450}}>NBA</Link>
                {width > 500 && (
                    <>
                        <Link to="/login"><span>Login</span></Link>
                    </>
                )}
                {width > 450 && (
                    <>
                        <Link to="/register" style = {{marginLeft: 50}}><span>Register</span></Link>
                    </>
                )}
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

export default Nav