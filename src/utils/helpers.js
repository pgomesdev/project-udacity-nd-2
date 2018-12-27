const reducer = function reducerFunction (accumulator, currentValue)  {
  return {
    ...accumulator,
    [currentValue.id]: currentValue,
  }
}

export function arrayToObject (array) {
  const newObject = array.reduce(reducer, {})

  return newObject
}

export function formatDate (timestamp) {
  const date = new Date(timestamp)

  const stringDate = `${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()}/${date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`

  return stringDate
}
