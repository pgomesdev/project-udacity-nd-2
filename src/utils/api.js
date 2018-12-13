import axios from 'axios'

export async function getInitialData () {
  const response = await Promise.all([
    getCategories(),
    getPosts(),
  ])

  return response
}

async function getCategories () {
  const options = {
    method: 'GET',
    url: 'http://localhost:3001/categories',
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  const parsedData = response.data

  return parsedData
}

async function getPosts () {
  const options = {
    method: 'GET',
    url: 'http://localhost:3001/posts',
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  const parsedData = {
    posts: response.data
  }

  return parsedData
}
