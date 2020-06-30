import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Detail = ({ detail, entry }) => 
  <div>{detail}: {entry[detail]}</div>

const LanguageList = ( { entry }) => {
  return (
    <ul>
      {entry.languages.map(
        language => <li key={language.name}>{language.name}</li>)}
    </ul>
  )
}

const Weather = ({ entry }) => {const api_key = process.env.REACT_APP_API_KEY
  const [ weather, setWeather ] = useState([])
  const weatherhook = () => {
    console.log('effect')
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${entry.capital}&appid=${api_key}&units=imperial`)
      .then(response => {
        console.log('promise fulfilled', response)
        setWeather(response.data)
      })
    }
  useEffect(weatherhook, [])

  try { 
    return(
      <div>
        <div><b>Temperature:</b> {weather.main.temp} degrees F</div>
        <div><b>Conditions:</b> {weather.weather[0].description}</div>
        <div><b>Wind:</b> {weather.wind.speed} mph</div>
      </div>
    )
  } catch (error) {
    return null
  }
}

const CountryDetails = ({ entry }) => {


  return (
    <div>
      <h1>{entry.name}</h1>
      <Detail detail='capital' entry={entry} />
      <Detail detail='population' entry={entry} />
      <h2>Languages</h2>
      <LanguageList entry={entry} />
      <img src={entry.flag} alt={`Flag of ${entry.name}`} width='200px' />
      <h2>Weather</h2>
      <Weather entry={entry} />
    </div>
  )

}

export default CountryDetails