import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import statsNbaService from '../services/statsNba.js'
import store from '../store.js'
import { initializeNbaStats } from '../reducers/nbaStatsReducer.js'


const Nba = () => {
    const [date, setThisDate] = useState(new Date())

    const dispatch = useDispatch()
    var scoreboard = useSelector(board => board.nbaStats.games)

    console.log('sb', scoreboard)

    const prevDate = () => {
        var newDate = new Date()
        newDate.setDate(date.getDate() - 1)
        setThisDate(newDate)
        dispatch(initializeNbaStats(newDate))
        return
    }

    const nextDate = () => {
        var newDate = new Date(date)
        newDate.setDate(date.getDate() + 1)
        setThisDate(newDate)
        dispatch(initializeNbaStats(newDate))
        return
    }

    const getDateString = (offset) => {
        var wantedDate = new Date(date)
        wantedDate.setDate(date.getDate() + offset)
        return wantedDate.toLocaleDateString("en-GB", { year: 'numeric', month: 'numeric', day: 'numeric' })
    }

    return(
        <div>
            <button onClick={prevDate}>{getDateString(-1)}</button>
            <div style={{ color: 'white'}}>{getDateString(0)}</div>
            <button onClick={nextDate}>{getDateString(1)}</button>

            {(scoreboard !== '')?  // Example nba scores
                <div style={{ color: 'white'}}>
                    {
                        scoreboard.map(game => 
                            <li key={game.gameId}>
                            {game.hTeam.triCode} {game.hTeam.score} - {game.vTeam.triCode} {game.vTeam.score}
                            
                            </li>
                        )
                    }
                </div>
            :
                <div style={{ color: 'white'}}>Loading...</div>
            }
        </div>
    )
}

export default Nba
