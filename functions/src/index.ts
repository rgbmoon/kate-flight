import * as functions from "firebase-functions"

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const testRequest = functions.https.onRequest((request, response) => {
  const token = functions.config().vk.key
  const userId = functions.config().vk.id
  const apiVer = functions.config().vk.apiver
  const apiUrl = `https://api.vk.com/method/wall.get?owner_id=-${userId}&count=1&access_token=${token}&v=${apiVer}`

  response.send(apiUrl)

  // fetch(apiUrl, {
  //   method: 'GET'
  // })
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       functions.logger.info(result, { structuredData: true })
  //       console.log(result)
  //     },
  //     (error) => {
  //       console.log("Ошибка при получении данных...")
  //     }
  //   )
})

