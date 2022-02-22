import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Scoreboard = ({ rerenderParent }) => {
    var scoreboard = useSelector(state => state.nbaStats.scoreboard.games)
    var boxscore = useSelector(state => state.nbaStats.boxscore)
    var isLoaded = useSelector(state => state.nbaStats.isLoaded)

    useEffect(() => {
        rerenderParent()
    }, [isLoaded])

    if(!isLoaded){
        return(<div>Loading...</div>)
    }
    if(scoreboard.length === 0){
        return(<div>No games on this date</div>)
    }
    return(
        <div>
            {
                scoreboard.map(game => 
                    <li key={game.gameId}>
                        {game.hTeam.triCode} {game.hTeam.score} - {game.vTeam.triCode} {game.vTeam.score}
                        <br></br>
                        <div>
                            {(boxscore[game.gameId] !== undefined)?
                                <div style={{ marginLeft: 50 }}>
                                    Top scorers:
                                    <br></br>
                                    <div style={{ marginLeft: 50}}>
                                        {boxscore[game.gameId].hTeam.leaders.points.players[0].lastName}: {boxscore[game.gameId].hTeam.leaders.points.value}
                                        <br></br>
                                        {boxscore[game.gameId].vTeam.leaders.points.players[0].lastName}: {boxscore[game.gameId].vTeam.leaders.points.value}
                                    </div>
                                </div>
                            :
                                <div></div>
                            }
                        </div>
                    </li>
                )
            }
        </div>
    )
}

export default Scoreboard