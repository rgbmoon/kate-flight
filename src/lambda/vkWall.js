import axios from "axios"

const REACT_APP_VK_OWNER_ID = process.env.REACT_APP_VK_OWNER_ID
const REACT_APP_VK_SERVICE_KEY = process.env.REACT_APP_VK_SERVICE_KEY
const REACT_APP_VK_API_VER = process.env.REACT_APP_VK_API_VER

export async function handler(event, context) {
  const querystring = event.queryStringParameters;
  const offset = querystring.offset
  const count = querystring.count

  const API_WALL_ENDPOINT = `https://api.vk.com/method/wall.get?owner_id=-${REACT_APP_VK_OWNER_ID}&count=${count}&offset=${offset}&access_token=${REACT_APP_VK_SERVICE_KEY}&v=${REACT_APP_VK_API_VER}`

  try {
    const response = await axios.get(API_WALL_ENDPOINT, { headers: { Accept: "application/json" } })
    const data = response.data
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}