import React, { useState, useEffect } from 'react'

import statsNbaService from './services/statsNba.js'

import Nav from './components/Nav.js'


let scoreboard = ''
let boxscore = ''

const App = () => {
  const [sb, setSb] = useState('')
  const [bs, setBs] = useState('')

  useEffect(() => {
    console.log('effect')
    statsNbaService
      .getScoreboard()
      .then(initialScoreBoard => {
        scoreboard = initialScoreBoard
        setSb(initialScoreBoard)
      })
    statsNbaService
      .getBoxScore()
      .then(initialBoxScore => {
        boxscore = initialBoxScore
        setBs(initialBoxScore)
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

      {boxscore !== '' ?
        <div>
            {
              boxscore.stats.activePlayers.map(player =>
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

export default App
