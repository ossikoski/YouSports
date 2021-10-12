import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import statsNbaService from '../services/statsNba.js'


const Nba = () => {
    const [sb, setSb] = useState('')
    const [bs, setBs] = useState('')
    const [date, setThisDate] = useState(new Date(2021, 2, 16))
    const [dateOffset, setDateOffset] = useState(0)  // TODO
  
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

    const prevDate = () => {
        var newDate = new Date()
        newDate.setDate(date.getDate() - 1)
        setThisDate(newDate)
        return
    }

    const nextDate = () => {
        var newDate = new Date(date)
        newDate.setDate(date.getDate() + 1)
        setThisDate(newDate)
        return
    }

    const getDate = (offset) => {
        var wantedDate = new Date(date)
        wantedDate.setDate(date.getDate() + offset)
        return wantedDate.toLocaleDateString("en-GB", { year: 'numeric', month: 'numeric', day: 'numeric' })
    }

    return(
        <div>
            <button onClick={prevDate}>{getDate(-1)}</button>
            <div style={{ color: 'white'}}>{getDate(0)}</div>
            <button onClick={nextDate}>{getDate(1)}</button>

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