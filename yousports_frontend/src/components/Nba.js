import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import statsNbaService from '../services/statsNba.js'
import store from '../store.js'
import { initializeNbaStats } from '../reducers/nbaStatsReducer.js'


const Nba = () => {
    const [sb, setSb] = useState('')
    const [bs, setBs] = useState('')
    const [date, setThisDate] = useState(new Date(2021, 1, 16))
    const [dateOffset, setDateOffset] = useState(0)  // TODO

    const dispatch = useDispatch()
    var scoreboard = useSelector(board => board.nbaStats.games)

    console.log('sb', scoreboard)

    const prevDate = () => {
        var newDate = new Date()
        newDate.setDate(date.getDate() - 1)
        setThisDate(newDate)
        dispatch(initializeNbaStats(date))
        return
    }

    const nextDate = () => {
        var newDate = new Date(date)
        newDate.setDate(date.getDate() + 1)
        setThisDate(newDate)
        dispatch(initializeNbaStats(date))
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
