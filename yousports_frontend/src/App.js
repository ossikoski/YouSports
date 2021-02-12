import React, { useState, useEffect } from 'react'

import statsNbaService from './services/statsNba.js'

const App = () => {
  useEffect(() => {
    console.log('effect')
    statsNbaService
      .getToday()
      .then(initialToday => {
        
      })
  }, [])

  return (
    <div>
    </div>
  )
}

export default App
