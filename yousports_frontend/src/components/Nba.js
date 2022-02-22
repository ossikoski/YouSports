import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { initializeNbaStats } from '../reducers/nbaStatsReducer.js'
import '../index.css'


const Nba = () => {
    const [date, setThisDate] = useState(new Date())

    var scoreboard = useSelector(state => state.nbaStats.scoreboard.games)
    var boxscore = useSelector(state => state.nbaStats.boxscore)

    const dispatch = useDispatch()
    
    console.log('sb', scoreboard)
    console.log('bs', boxscore)

    /**
     * When previous date button is clicked, this will change date state
     * Will also clear scoreboard and boxscore variables to undefined
     * @returns -
     */
    const prevDate = () => {
        var newDate = new Date()
        newDate.setDate(date.getDate() - 1)
        setThisDate(newDate)
        dispatch(initializeNbaStats(newDate))
        return
    }

    /**
     * When next date button is clicked, this will change date state
     * Will also clear scoreboard and boxscore variables to undefined
     * @returns -
     */
    const nextDate = () => {
        var newDate = new Date(date)
        newDate.setDate(date.getDate() + 1)
        setThisDate(newDate)
        dispatch(initializeNbaStats(newDate))
        return
    }

    /**
     * Current date + offset in right format for datebutton class
     * 
     * @param {number} offset The days to offset from current date
     * @returns {string} Current date in format DD/MM/YYYY
     */
    const getDateString = (offset) => {
        var wantedDate = new Date(date)
        wantedDate.setDate(date.getDate() + offset)

        return wantedDate.toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' })
    }

    if(scoreboard.length === 0){
        return(
            <div style={{ color: 'white'}}><br></br>
                <div>  {/*(style) text-align: center;*/}
                    <button className='datebutton' onClick={prevDate}>{getDateString(-1)}</button>
                    <div className='datebutton' style={{ color: 'white'}}>{getDateString(0)}</div>
                    <button className='datebutton' onClick={nextDate}>{getDateString(1)}</button>
                </div>
                
                <br></br>
                No games played on this date
            </div>
        )
    }
    return(
        <div><br></br>
            <div>  {/*(style) text-align: center;*/}
                <button className='datebutton' onClick={prevDate}>{getDateString(-1)}</button>
                <div className='datebutton' style={{ color: 'white'}}>{getDateString(0)}</div>
                <button className='datebutton' onClick={nextDate}>{getDateString(1)}</button>
            </div>
            
            <br></br>

            {(scoreboard !== undefined && boxscore !== undefined)?
                <div style={{ color: 'white'}}>
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
            :
                <div style={{ color: 'white'}}>Loading...</div>
            }
        </div>
    )
}

export default Nba
