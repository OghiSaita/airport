import fetchFlights from './fetchFlights.js'
import { displayArrivals, displayDepartures } from './displayFlights.js'

//import setDesign from './setDesign.js'

const showFlights = async (url) => {
  //fetch flights
  const data = await fetchFlights(url)

  // display flights
  const selectDeparture = await displayDepartures(data)
  const selectArrival = await displayArrivals(data)

  if (selectDeparture) {
    console.log(selectDeparture)
  }
}
export default showFlights
