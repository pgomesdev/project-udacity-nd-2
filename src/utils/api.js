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

  return response.data
}

export async function getCommentsByPostId (id) {
  const options = {
    method: 'GET',
    url: `http://localhost:3001/posts/${id}/comments`,
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  return response.data
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

export async function createComment (comment) {
  const options = {
    method: 'POST',
    url: 'http://localhost:3001/comments',
    headers: { 'Authorization': '123456' },
    data: comment
  }

  const response = await axios(options)

  return response.data
}

export async function updateComment(id, comment) {
  const options = {
    method: 'PUT',
    url: `http://localhost:3001/comments/${id}`,
    headers: { 'Authorization': '123456' },
    data: comment
  }

  const response = await axios(options)

  return response.data
}

export async function deleteCommentById(id) {
  const options = {
    method: 'DELETE',
    url: `http://localhost:3001/comments/${id}`,
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  return response.data
}
