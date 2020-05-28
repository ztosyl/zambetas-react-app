import React, { useEffect, useState } from 'react'
import { getRandomBackground } from '../api/unsplash'

const BackgroundImage = ({ children }) => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    getRandomBackground()
      .then(info => {
        setUrl(info.data.urls.full)
        // setUrl(data.urls.full)
      })
      .catch(console.error)
  }, [])
  return (
    <div className='app' style={{backgroundImage: `url(${url})`}}>
    {children}
    </div>
  )
}

export default BackgroundImage
