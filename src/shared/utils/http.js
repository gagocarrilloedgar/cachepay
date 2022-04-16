const headers = {
  'Content-Type': 'application/json'
}
const Fetch = async (endpoint, customConfig) => {
  try {
    const response = await fetch(endpoint, customConfig)
    const createResponse = async (response) => {
      let result
      if (response.ok) {
        const data = await response.json()
        result = {
          status: response.status,
          data: data,
          message: '',
          error: null
        }
      } else {
        const errorMessage = await response.text()
        const statusCode = {
          200: 'OK',
          401: 'Unauthorized',
          500: 'Internal Server Error',
          404: 'Not Found'
        }
        result = {
          status: response.status,
          data: null,
          message: errorMessage,
          error: new Error(statusCode[response.status])
        }
      }
      return result
    }
    return await createResponse(response)
  } catch (error) {
    const ErrorResponse = async (error) => {
      return {
        status: 500,
        data: null,
        message: 'ERR_CONNECTION_REFUSED',
        error: error
      }
    }
    return ErrorResponse(error)
  }
}

const get = async ({ endpoint, credentials, config = {} }) => {
  return Fetch(endpoint, {
    method: 'GET',
    redirect: 'follow',
    credentials: credentials || 'omit',
    headers: headers,
    ...config
  })
}

const post = async ({ endpoint, credentials, body = {}, config = {} }) =>
  Fetch(endpoint, {
    method: 'POST',
    credentials: credentials || 'omit',
    headers: headers,
    body: JSON.stringify(body.body),
    ...config
  })

const put = async ({ endpoint, credentials, body = {}, config = {} }) =>
  Fetch(endpoint, {
    method: 'PUT',
    credentials: credentials || 'omit',
    headers: headers,
    withCredentials: true,
    body: JSON.stringify(body.body),
    ...config
  })

export const http = {
  get: get,
  post: post,
  put: put,
  delete: ''
}
