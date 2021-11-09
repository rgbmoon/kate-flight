import axios from "axios"


export async function handler(event, context) {

  const API_WALL_ENDPOINT = `https://api.vk.com/method/wall.get?owner_id=-${process.env.REACT_APP_VK_OWNER_ID}&count=1&access_token=${process.env.REACT_APP_VK_SERVICE_KEY}&v=${process.env.REACT_APP_VK_API_VER}`

  try {
    const response = await axios.get(API_WALL_ENDPOINT, { headers: { Accept: "application/json" } })
    const data = response.data
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}