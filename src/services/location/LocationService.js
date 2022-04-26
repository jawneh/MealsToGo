// import camelize from "camelize"
import { locations } from "./LocationMock"

export const locationRequest = search_term => {
  return new Promise((resolve, reject) => {
    const location_mock = locations[search_term]
    if (!location_mock) {
      reject("location not found")
    }
    resolve(location_mock)
  })
}

export const locationTransform = result => {
  // const formatted_response = camelize(result)
  //   const { geometry = {} } = formatted_response.result.results[0]
  const { geometry = {} } = result.results[0]
  const { lat, lng } = geometry.location

  return { lat, lng, viewport: geometry.viewport }
}
