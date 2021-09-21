import React from 'react'

import logo from '../img/Yousports_logo_rect_black_u_on_yellow_stroke.png'

const Home = () => {

    return(
        <div className="home" style={{ color: 'white', backgroundColor: 'black', display:'flex', alignItems: 'center', position: 'absolute', left: 100, top: 300}}>
            <img src={ logo } alt="Logo" style={{ height: 300, width: 300 }}/>
            A sports feed for you - created by you
        </div>
    )
}

export default Home