import axios from 'axios'

export const getQuote = () => {
  return axios({
    url: 'https://quotes.rest/qod',
  })
}
