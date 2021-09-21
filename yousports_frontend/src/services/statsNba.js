import axios from 'axios'


const baseUrl = 'http://data.nba.net/10s/prod'
const todayUrl = `${baseUrl}/v1/today.json`
const scoreboardUrl = (date) => {
    return `${baseUrl}/v2/${date}/scoreboard.json`
} 
const boxscoreUrl = (date, gameId) => {
    return `${baseUrl}/v1/${date}/${gameId}_boxscore.json`
}

const getToday = () => {
    const request = axios.get(todayUrl)
    return request.then(response => response.data)
}

const getScoreboard = () => {
    const request = axios.get(scoreboardUrl('20210216'))
    return request.then(response => response.data)
}

const getBoxScore = () => {
    const request = axios.get(boxscoreUrl('20210216', '0022000427'))
    return request.then(response => response.data)
}

export default { getToday, getScoreboard, getBoxScore }