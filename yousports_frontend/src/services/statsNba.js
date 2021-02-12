import axios from 'axios'
const todayUrl = 'http://data.nba.net/10s/prod/v1/today.json'

const getToday = () => {
    const request = axios.get(todayUrl)
    return request.then(response => response.data)
}

export default { getToday }