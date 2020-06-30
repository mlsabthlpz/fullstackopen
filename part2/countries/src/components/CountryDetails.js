import React from 'react'

const LanguageList = ( { entry }) => {
  return (
    <ul>
      {entry.languages.map(
        language => <li key={language.name}>{language.name}</li>)}
    </ul>
  )
}

const Detail = ({ detail, entry }) => 
  <div>{detail}: {entry[detail]}</div>

const CountryDetails = ({ entry }) => {
  return (
    <div>
      <h1>{entry.name}</h1>
      <Detail detail='capital' entry={entry} />
      <Detail detail='population' entry={entry} />
      <h2>Languages</h2>
      <LanguageList entry={entry} />
      <img src={entry.flag} alt={`Flag of ${entry.name}`} width='200px' />
    </div>
  )
}

export default CountryDetails