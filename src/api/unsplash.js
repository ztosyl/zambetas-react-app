import axios from 'axios'

export const getRandomBackground = () => {
  return axios({
    url: 'https://api.unsplash.com/photos/random/?client_id=yvDbdmzH9jwPVA3lUMj6GkzZhssWbnnjYUBj0jyWMHc'
  })
}
