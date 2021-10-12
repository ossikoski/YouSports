import statsNbaService from '../services/statsNba.js'

const nbaStatsReducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type){
    case 'INIT':
        return action.data
    default:
        return state
    }
}
  
  export const initializeNbaStats = (date) => {
        console.log("initialize")
        return async dispatch => {
            const scoreboard = await statsNbaService.getScoreboard(date)
            console.log("scoreboard", scoreboard)
            //const boxscore = await statsNbaService.getBoxScore(date)    // TODO
            dispatch({
                type: 'INIT',
                data: scoreboard
            })
        }
}
  
export default nbaStatsReducer