import React, { useState, useEffect } from 'react'

import statsNbaService from './services/statsNba.js'

import Nav from './components/Nav.js'

let scoreboard = ''

const App = () => {
  const [sb, setSb] = useState('')

  useEffect(() => {
    console.log('effect')
    statsNbaService
      .getScoreboard()
      .then(initialScoreBoard => {
        scoreboard = initialScoreBoard
        setSb(initialScoreBoard)
      })
  }, [])

  return (
    <div>
      <Nav/>
      {scoreboard !== '' ?
        <div>
          {
            scoreboard.games.map(game => 
              <li key={game.gameId}>
                {game.hTeam.triCode} {game.hTeam.score} - {game.vTeam.triCode} {game.vTeam.score}
                
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
/*

        {scoreboard.games.map(game => 
        
          <li key={gameId}>
            {game.hTeam.triCode} {game.hTeam.score} - {game.vTeam.triCode} {game.vTeam.score}
          </li>
        )}
*/

export default App
