import axios from 'axios'
import md5 from 'md5'
import {useEffect} from 'react'

const baseURL = 'http://gateway.marvel.com/v1/public'

const publicKey = '1b85025bf87554819cb9f6eb2772eca3'
const pirvateKey = '17b41b7d9014f039dbaab46179d4c016f6521ce6'
const time = Number(new Date());

const hash = md5(time + pirvateKey + publicKey)

function App() {

  useEffect(() => {
    axios.get(`${baseURL}/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
    .then(response => console.log(response.data.data))
    .catch(err => console.log(err))

  }, [,])
  
  return (
    <div className="App">
      <h1>Inicial App</h1>
    </div>
  );
}

export default App;
