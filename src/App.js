import React from 'react';
// import BackgroundImage from './components/BackgroundImage'
import Weather from './components/Weather'
import Quote from './components/Quote'
import moment from 'moment'
import './App.css';

function App() {

const getTimeOfDay = () => {
  const time = moment().format('LT')
  const hourString = time.charAt(0)
  const hour = parseInt(hourString)
  if (time.includes('AM')) {
    if (hour > 2 && hour < 12) {
      return 'morning'
    } else if ( hour === 12) {
      return 'afternoon'
    } else {
      return 'night'
    }
  } else {
    if (hour < 5) {
      return 'afternoon'
    } else if (hour >= 5 && hour < 9) {
      return 'evening'
    } else {
      return 'night'
    }
  }
}
  return (
  // <BackgroundImage>
  <div>
    <Weather />
    <div className='time-and-greeting'>
      <p className='time'>{moment().format('LT')}</p>
      Good {getTimeOfDay()}!
    </div>
    <Quote />
  </div>
  // </BackgroundImage>
  )
}

export default App;
