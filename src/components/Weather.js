import React, { useEffect, useState } from 'react'
import { getWeather } from '../api/openweather'

const Weather = () => {
const [weather, setWeather] = useState('')
const [currTemp, setCurrTemp] = useState('')

const getIcon = weather => {
   const normWeather = weather.toLowerCase()
  if (normWeather === 'clear') {
    return ('☀')
  } else if (normWeather === 'rain') {
    return ('🌧')
  } else if (normWeather === 'storm') {
    return ('⛈')
  } else if (normWeather === 'snow') {
    return ('🌨')
  } else if (normWeather === 'mist') {
    return ('🌫')
  } else if (normWeather === 'clouds') {
    return ('☁')
  } else {
    return ('')
  }
}

useEffect (() => {
  getWeather()
    .then(info => {
      setWeather(info.data.weather[0].main)
      setCurrTemp(info.data.main.temp)
    })
    .catch(console.error)
}, [])
  return (
    <div className='weather'>
    <div className='container weather-container'>
        {getIcon(weather)} {currTemp}°C
    </div>
    <div className='container weather-container'>
        Riyadh
    </div>
    </div>
  )
}

export default Weather
