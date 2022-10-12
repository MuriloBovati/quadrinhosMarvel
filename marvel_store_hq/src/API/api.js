import axios from 'axios'
import md5 from 'md5'


const publicKey = '1b85025bf87554819cb9f6eb2772eca3'
const pirvateKey = '17b41b7d9014f039dbaab46179d4c016f6521ce6'

const limit = 100
const offset = 3

const ts = Number(new Date());

const hash = md5(ts + pirvateKey + publicKey)

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params: {
        limit,
        offset,
        ts,
        apikey: publicKey,
        hash,
    }
})

export default api
