import { mocks, mock_images } from "./mock"
// import camelize from "camelize"
// "37.7749295,-122.4194155"
export const restaurantRequest = location => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if (!mock) {
      reject("not found")
    }
    resolve(mock)
  })
}

export const restaurantsTransform = ({ results = [] }) => {
  const mapped_results = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(p => {
      return mock_images[Math.ceil(Math.random() * (mock_images.length - 1))]
    })

    return {
      ...restaurant,
      address: restaurant.vicinity,
      is_open_now: restaurant.opening_hours && restaurant.opening_hours.open_now,
      is_closed_temporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    }
  })
  // return camelize(mappedResults)
  return mapped_results
}

// restaurantRequest()
//   .then(restaurantsTransform)
//   .then(transaformedResponse => {
//     // console.log(transaformedResponse)
//   })
//   .catch(err => {
//     console.log(err)
//   })
