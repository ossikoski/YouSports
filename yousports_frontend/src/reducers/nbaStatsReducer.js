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
        console.log("initialize", date)
        return async dispatch => {
            const scoreboard = await statsNbaService.getScoreboard(date)
            
            // Go through all games and get boxscores
            var boxscore;
            var boxscores = {}
            for(var game of scoreboard.games){
                boxscore = await statsNbaService.getBoxScore(date, game.gameId)
                //console.log("game: ", boxscore)
                boxscores[boxscore.basicGameData.gameId] = boxscore.stats
            }

            //console.log("boxscores in init:" , boxscores)
            //console.log("and scoreaboars", scoreboard)

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