import type { NextApiRequest, NextApiResponse } from 'next/types'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const WORKER_URL = process.env.WORKER_URL

  const {
    body,
    method
  } = req
  console.log(body)
  switch (method) {
    case 'POST':
      // Get orders from backend
      const requestHeaders: HeadersInit = new Headers()
      requestHeaders.set('x-source', 'nextjs')
      requestHeaders.set('Content-Type', 'application/json')
      const response = await fetch(`${WORKER_URL}/orders/complete`, {
        method: 'POST',
        body,
        headers: requestHeaders
      })
      const responseJson = await response.json()
      console.log('response', responseJson.status)
      res.status(200).json(responseJson)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
