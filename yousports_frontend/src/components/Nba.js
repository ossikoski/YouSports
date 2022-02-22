import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DateSelector from './DateSelector.js'
import Scoreboard from './Scoreboard.js'

import { initializeNbaStats } from '../reducers/nbaStatsReducer.js'
import '../index.css'


const Nba = () => {
    const [date, setThisDate] = useState(new Date())
    //const [isLoaded, setIsLoaded] = useState(false) // Used to rerender

    const dispatch = useDispatch()

    /**
     * Used to rerender the Nba component state
     */
    const rerender = () => {
        setThisDate(date)
    }

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
    
    return(
        <div style={{ color: 'white'}}><br></br>
            <DateSelector prevDate={prevDate} nextDate={nextDate} getDateString={getDateString}/>
            <br></br>
            <Scoreboard rerenderParent={rerender}/>
        </div>
    )
}

export default Nba
