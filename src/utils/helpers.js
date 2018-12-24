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