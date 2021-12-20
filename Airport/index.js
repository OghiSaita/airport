import presentFlights from './presentFlights.js'
import { searchFlights } from './searchFlights.js'
const url = 'flight.json'
import { getElement } from './utils.js'
const search = getElement('.searchFlight')

window.addEventListener('DOMContentLoaded', () => {
  presentFlights(url)
  search.addEventListener('click', searchFlights(url))
})
