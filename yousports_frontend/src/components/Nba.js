import React, { useState, useEffect } from 'react'

import statsNbaService from '../services/statsNba.js'


const Nba = () => {
    const [sb, setSb] = useState('')
    const [bs, setBs] = useState('')
    const [date, setDate] = useState(Date(2021, 2, 16))
  
    useEffect(() => {
      console.log('effect')
      statsNbaService
        .getScoreboard()
        .then(initialScoreBoard => {
          setSb(initialScoreBoard)
        })
      statsNbaService
        .getBoxScore()
        .then(initialBoxScore => {
          setBs(initialBoxScore)
        })
    }, [])

    return(
        <div>
            {(sb !== '' && bs !== '' )?  // Example nba scores and players
                <div style={{ color: 'white'}}>
                    {
                        sb.games.map(game => 
                            <li key={game.gameId}>
                            {game.hTeam.triCode} {game.hTeam.score} - {game.vTeam.triCode} {game.vTeam.score}
                            
                            </li>
                        )
                    }
                    {
                        bs.stats.activePlayers.map(player =>
                            <li key={player.personId}>
                                {player.firstName} {player.lastName}
                            </li>
                        )
                    }
                </div>
            :
                <div>Loading...</div>
            }
        </div>
        
    )
}

export default Nba