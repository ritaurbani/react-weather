import { useState, useEffect } from 'react'
import axios from "axios"
import Card from './Card'


const apiKey = "bb8f8dd19b144f5aaa6184817251901"
const apiUrl = "http://api.weatherapi.com/v1/current.json"


// {
//   "text": "Partly cloudy",
//     "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
//       "code": 1003
// }


function App() {

  const [searchValue, setSearchValue] = useState("")
  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState({})

  const getWeather = () => {
    axios.get(`${apiUrl}`, {
      params: {
        key: apiKey,
        q: searchValue,
      }
    }).then((resp) => {
      console.log(resp)
      const { text, icon } = resp.data.current.condition
      const { name, country, localtime } = resp.data.location
      setWeather({
        type: text,
        image: icon,
      })
      setLocation ({
        name: name,
        country: country,
        localtime: localtime,
      })

    })
  }

  // useEffect(() => {
  //   getWeather()
  // }, []);

  return (
    <>
      <h3 className='title'>Weather</h3>
      <div className='container'>
        <div>
          <input
            type="text"
            placeholder='type the city name'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} />
          <button onClick={getWeather} className='btn'>Search</button>
        </div >
        <main>
          <Card 
          weather={weather}
          location={location}/>
        </main>
      </div>
    </>
  )
}

export default App
