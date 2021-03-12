import Axios from 'axios'
import URLs from './URLs'
// Axios.defaults.headers = {
//     'Cache-Control': 'no-cache',
//     'Pragma': 'no-cache',
//     'Expires': '0',
// }
const getAllSongs = async () => {
    // await delay(2000)
    return Axios.get(URLs.GET_SONGS).then(({ data }) => {
        if (data && data.results) {
            return data.results
        }
        return []
    })
}

const delay = time => new Promise(res => {
    setTimeout(res, time)
})

export default {
    getAllSongs
}
