'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'

const box = { border: '2px solid #000', backgroundColor: '#fff', padding: '12px', margin: '15px' }
const table = { borderCollapse: 'collapse', width: '100%' }
const cell = { border: '1px solid #000', padding: '5px 10px', textAlign: 'left' }

const page = () => {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const getWeather = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: 'Kochi',
            appid: "a5d1daa82d451b1f57da9f2012e8c6ab",
            units: 'metric',
          },
        }
      )
      setWeather(response.data)
    } catch (err) {
      console.error('Errorrr:', err)
      setError('not loading detailss.')
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div style={box}>
      <h2 style={{ marginTop: 0 }}>Weather at Chengannur</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (

        <table style={table}>
          <tbody>


            <tr>
              <td style={cell}>Temperature</td>
              <td style={cell}>{weather.main.temp} °C</td>
      </tr>
            <tr>
              <td style={cell}>Humidity</td>
              <td style={cell}>{weather.main.humidity} %</td>
              </tr>
            <tr>
              <td style={cell}>Wind speed</td>
            <td style={cell}>{weather.wind.speed} m/s</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default page