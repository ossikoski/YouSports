import React, { useState, useEffect } from 'react'

const DateSelector = ({ prevDate, nextDate, getDateString }) => {

    return(
        <div>
            <button className='datebutton' onClick={prevDate}>{getDateString(-1)}</button>
            <div className='datebutton' style={{ color: 'white'}}>{getDateString(0)}</div>
            <button className='datebutton' onClick={nextDate}>{getDateString(1)}</button>
        </div>
    )
}

export default DateSelector
