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

export async function createPost(post) {
  const {
    id,
    timestamp,
    title,
    body,
    author,
    category,
  } = post;

  const options = {
    method: 'POST',
    url: 'http://localhost:3001/posts',
    headers: { 'Authorization': '123456' },
    data: {
      id,
      timestamp,
      title,
      body,
      author,
      category,
    }
  }

  const response = await axios(options)

  return response.data
}

export async function editPost(post) {
  
}
