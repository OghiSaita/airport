import { getElement } from './utils.js'
const selectDeparture = getElement('#fname')
const selectArrival = getElement('#lname')
const dateDeparture = getElement('#heen-reis')
const passagiers = getElement('#persons')
const selectFlight = getElement('#select-flight')
const main = getElement('.main-content')
const boeken = getElement('#vlucht-boeken')
const searchFlight = getElement('.searchFlight')

const searchFlights = (departures) => {
  main.classList.add('show-main-content')
  let DOMdepartureLocation = selectDeparture.value
  let DOMarrivalLocation = selectArrival.value
  let DOMdepartureDate = dateDeparture.value
  let DOMpassangers = passagiers.value
  const newDepartures = departures
    .map((departure) => {
      const {
        airportLocation,
        desAirportLocation,
        departureDate,
        departureTime,
        airportName,
        desAirportName,
      } = departure
      if (
        DOMdepartureLocation === airportLocation &&
        DOMarrivalLocation === desAirportLocation &&
        DOMdepartureDate === departureDate
      ) {
        //show match and display form

        return `<p class="">datum: ${departureDate}</p>
            <p class="">tijd: ${departureTime}</p>
            <h3 for="fname">${airportLocation}</h3>
            <p class="">naar</p>
            <h3 for="fname">${desAirportLocation}</h3>`
      }
    })
    .join('')
  searchFlight.innerHTML = newDepartures
  return searchFlight
}

export { searchFlights }
