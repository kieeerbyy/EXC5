import { defineEventHandler, getQuery, readBody } from 'h3'

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

const fetchData = async () => {
  const response = await fetch('/api/user');
  const fetchedData = await response.json();
  data.value = [...data.value, ...fetchedData];
};

fetchData();
