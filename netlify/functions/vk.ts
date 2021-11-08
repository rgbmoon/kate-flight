import { Handler } from "@netlify/functions";

const API_VER = process.env.REACT_APP_VK_API_VER
const API_KEY = process.env.REACT_APP_VK_SERVICE_KEY
const API_OWNER_ID = process.env.REACT_APP_VK_OWNER_ID
const API_WALL_ENDPOINT = `https://api.vk.com/method/wall.get?owner_id=-${API_OWNER_ID}&count=1&access_token=${API_KEY}&v=${API_VER}`

// exports.handler = async (event, context) => {
//   let response
//   try {
//     response = await fetch(API_WALL_ENDPOINT)
//     // handle response
//   } catch (err) {
//     return {
//       statusCode: err.statusCode || 500,
//       body: JSON.stringify({
//         error: err.message
//       })
//     }
//   }

//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       data: response
//     })
//   }
// }

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

export { handler };