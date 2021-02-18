import React, { useState, useEffect } from 'react'

import statsNbaService  from './services/statsNba.js'

let scoreboard = ''

const App = () => {
  const [sb, setSb] = useState('')

  useEffect(() => {
    console.log('effect')
    statsNbaService
      .getScoreboard()
      .then(initialScoreBoard => {
        console.log('initialscoreboard', initialScoreBoard.games[0].gameId)
        scoreboard = initialScoreBoard
        setSb(initialScoreBoard)
        console.log('scoreboard after assigned', scoreboard)
      })
  }, [])
  console.log('scoreboard outside useEffect', scoreboard)

  return (
    <div>
      {console.log('scoreboard inside return', scoreboard.games)}
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
