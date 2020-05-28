import React, { useEffect, useState } from 'react'
import { getWeather } from '../api/openweather'

const Weather = () => {
const [weather, setWeather] = useState('')
const [currTemp, setCurrTemp] = useState('')
const [feelsLike, setFeelsLike] = useState('')
const [hiTemp, setHiTemp] = useState('')
const [loTemp, setLoTemp] = useState('')

useEffect (() => {
  getWeather()
    .then(info => {
      setWeather(info.data.weather[0].main)
      setCurrTemp(info.data.main.temp)
      setFeelsLike(info.data.main.feels_like)
      setHiTemp(info.data.main.temp_max)
      setLoTemp(info.data.main.temp_min)
    })
    .catch(console.error)
}, [])
  return (
    <div>
    <h3>Weather in Riyadh, Saudi Arabia</h3>
    <p>It is {weather.toLowerCase()} outside.</p>
    <p>Current temperature: {currTemp}</p>
    <p>Feels like: {feelsLike}</p>
    <p>High: {hiTemp}</p>
    <p>Low: {loTemp}</p>
    </div>
  )
}

export default Weather
