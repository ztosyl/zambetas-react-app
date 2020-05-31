import React, { useEffect, useState } from 'react'
import { getQuote } from '../api/qod'

const Quote = () => {
  const [quote, setQuote] = useState('')
  const[author, setAuthor] = useState('')

  useEffect(() => {
    getQuote()
      .then(res => {
        setQuote(res.data.contents.quotes[0].quote)
        return res
      })
      .then(res => setAuthor(res.data.contents.quotes[0].author))
      .catch(console.error)
  }, [])

  return (
    <div className='quote'>"{quote}" - {author}</div>
  )
}

export default Quote
