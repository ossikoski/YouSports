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
    var day_string = ''
    var month_string = ''

    // One digit days and months need a zero to be added
    console.log("formatDate", date)
    console.log("formatDate", date.getDate(), "m: ", date.getMonth(), "y: ", date.getFullYear())
    if(date.getDate() > 9)
        day_string = date.getDate().toString()
    else
        day_string = "0" + date.getDate().toString()

    // January is 0 with date but 01 in the url
    if(date.getMonth()+1 > 9)
        month_string = (date.getMonth()+1).toString()
    else
        month_string = "0" + (date.getMonth()+1).toString()

    console.log("formatted date: ", `${date.getFullYear()}${month_string}${day_string}`)

    return `${date.getFullYear()}${month_string}${day_string}`
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
    const request = axios.get(boxscoreUrl(formatDate(date), '0022000427'))  // Hardcoded game id
    return request.then(response => response.data)
}

export default { getToday, getScoreboard, getBoxScore }