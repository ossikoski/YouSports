import axios from 'axios'


const baseUrl = 'http://data.nba.net/10s/prod'
const todayUrl = `${baseUrl}/v1/today.json`
const scoreboardUrl = (date) => {
    return `${baseUrl}/v2/${date}/scoreboard.json`
} 
const boxscoreUrl = (date, gameId) => {
    return `${baseUrl}/v1/${date}/${gameId}_boxscore.json`
}
const formatDate = (date) => {      // TODO Move to utils?
    if(date.getMonth()+1 > 9)
        return `${date.getFullYear()}${(date.getMonth()+1).toString()}${date.getDate()}`
    else
        return `${date.getFullYear()}${"0" + (date.getMonth()+1).toString()}${date.getDate()}`
}

const getToday = () => {
    const request = axios.get(todayUrl)
    return request.then(response => response.data)
}

const getScoreboard = (date) => {
    const request = axios.get(scoreboardUrl(formatDate(date)))
    return request.then(response => response.data)
}

const getBoxScore = (date) => {
    const request = axios.get(boxscoreUrl(formatDate(date), '0022000427'))
    return request.then(response => response.data)
}

export default { getToday, getScoreboard, getBoxScore }