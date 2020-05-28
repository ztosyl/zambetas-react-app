import axios from 'axios'

export const getWeather = () => {
  return axios({
    url:'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=6e50bcfc9824d701e06f39dfd8668779'
  })
}
