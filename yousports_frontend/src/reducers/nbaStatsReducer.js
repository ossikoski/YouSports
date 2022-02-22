import statsNbaService from '../services/statsNba.js'

const nbaStatsReducer = (state = [], action) => {
    switch(action.type){
        case 'INIT':
            return action.data
        default:
            return state
    }
}
  
export const initializeNbaStats = (date) => {
    return async dispatch => {
        const scoreboard = await statsNbaService.getScoreboard(date)
        var boxscores = {}
        
        // Only query boxscores if a game has been played on this date
        if(scoreboard.numGames !== 0)
        {
            // Go through all games and get boxscores
            var boxscore;
            var boxscores = {}
            for(var game of scoreboard.games){
                boxscore = await statsNbaService.getBoxScore(date, game.gameId)
                boxscores[boxscore.basicGameData.gameId] = boxscore.stats
            }
        }

        dispatch({
            type: 'INIT',
            data: {
                scoreboard: scoreboard,
                boxscore: boxscores
            }
        })
    }
}
  
export default nbaStatsReducer