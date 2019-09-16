/* eslint-disable */
const axios = require('axios')

exports.handler = async function(event, context, callback) {
  const apiEndpoint = process.env.API_ENDPOINT
  console.log(`Proxy request to:: POST  ${apiEndpoint} -- with body: ${event.body}`)

  let body = null
  let statusCode = null
  try {
    const response = await axios.post(apiEndpoint, event.body)
    statusCode = response.status
    body = response.body || JSON.stringify({ message: 'Success!' })
  } catch (error) {
    console.log('Error while proxying: ', e)
    statusCode = error.response.status || 500
    body = errorMessage = error.response.body || error.message || JSON.stringify({ message: 'Error occured' })
  }

  console.log(`Proxy response from:: POST ${apiEndpoint} -- with status: ${statusCode}, body: ${body}`)
  return {
    statusCode,
    body,
  }
}
