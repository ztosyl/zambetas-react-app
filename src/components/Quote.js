import React, { useEffect, useState } from 'react'
import { getQuote } from '../api/qod'

const Quote = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    getQuote()
      .then(res => setQuote(res.data.contents.quotes[0].quote))
      .catch(console.error)
  }, [])

  return (
    <div class='quote'>"{quote}"</div>
  )
}

export default Quote
