import { getElement } from './utils.js'
const selectDeparture = getElement('#fname')
const selectArrival = getElement('#lname')
const dateDeparture = getElement('#heen-reis')
const passagiers = getElement('#persons')
const selectFlight = getElement('#select-flight')
const main = getElement('.main-content')
const boeken = getElement('#vlucht-boeken')

const displayDepartures = (departures) => {
  console.log(departures)
  let locations = [
    'Kies een locatie',
    ...new Set(departures.map((location) => location.airportLocation)),
  ]

    .map((airportLocation) => {
      return `<option value ="${airportLocation}">${airportLocation}</option>`
    })
    .join('')
  selectDeparture.innerHTML = locations
  return selectDeparture
}

const displayArrivals = (departures) => {
  let locations = [
    'Kies een locatie',
    ...new Set(departures.map((location) => location.desAirportLocation)),
  ]

    .map((desAirportLocation) => {
      return `<option value ="${desAirportLocation}">${desAirportLocation}</option>`
    })
    .join('')
  selectArrival.innerHTML = locations
  return selectArrival
}

export { displayDepartures, displayArrivals }
