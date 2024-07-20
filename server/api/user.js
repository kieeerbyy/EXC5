// server/api/data.js


let data = []

export default defineEventHandler(async (event) => {
  const method = event.req.method

  if (method === 'GET') {
    return data
  } else if (method === 'POST') {
    const body = await readBody(event)
    data.push(body)
    return body
  }
})
