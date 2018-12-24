import axios from 'axios'
import { arrayToObject } from '../utils/helpers'

/**
 * Returns all the posts and categories
 */
export async function getInitialData () {
  const response = await Promise.all([
    getCategories(),
    getPosts(),
  ])

  return response
}

/**
 * Returnas all the categories
 */
async function getCategories () {
  const options = {
    method: 'GET',
    url: 'http://localhost:3001/categories',
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  return response.data
}

/**
 * Returns the comments of a post
 */
export async function getCommentsByPostId (id) {
  const options = {
    method: 'GET',
    url: `http://localhost:3001/posts/${id}/comments`,
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  const comments = arrayToObject(response.data)

  return comments
}

/**
 * Returns all the posts
 */
async function getPosts () {
  const options = {
    method: 'GET',
    url: 'http://localhost:3001/posts',
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  const posts = arrayToObject(response.data)

  return posts
}

/**
 * Create a new post
 */
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


/**
 * Update a post
 */
export async function updatePost(post) {
  const {
    id,
    title,
    body,
  } = post

  const options = {
    method: 'PUT',
    url: `http://localhost:3001/posts/${id}`,
    headers: { 'Authorization': '123456' },
    data: {
      title,
      body,
    }
  }

  const response = await axios(options)

  return response.data
}

/**
 * Vote a post
 * @param {String} id 
 * @param {String} option 
 */
export async function votePost (id, option) {
  const options = {
    method: 'POST',
    url: `http://localhost:3001/posts/${id}`,
    headers: { 'Authorization': '123456' },
    data: {
      option,
    }
  }

  const response = await axios(options)

  return response.data
}

/**
 * Vote a comment
 * @param {String} id 
 * @param {String} option 
 */
export async function voteComment (id, option) {
  const options = {
    method: 'POST',
    url: `http://localhost:3001/comments/${id}`,
    headers: { 'Authorization': '123456' },
    data: {
      option,
    }
  }

  const response = await axios(options)

  return response.data
}

/**
 * Delete a post
 */
export async function deletePost(id) {
  const options = {
    method: 'DELETE',
    url: `http://localhost:3001/posts/${id}`,
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  return response.data
}

/**
 * Create a comment
 */
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

/**
 * Edit a comment
 */
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

/**
 * Delete a comment
 */
export async function deleteCommentById(id) {
  const options = {
    method: 'DELETE',
    url: `http://localhost:3001/comments/${id}`,
    headers: { 'Authorization': '123456' },
  }

  const response = await axios(options)

  return response.data
}
