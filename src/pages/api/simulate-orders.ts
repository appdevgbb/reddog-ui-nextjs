import type { NextApiRequest, NextApiResponse } from 'next/types'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {

  const VIRTUAL_CUSTOMERS_URL = process.env.VIRTUAL_CUSTOMERS_URL

  const {
    query: { orderCount },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get orders from backend
      console.log('GET')
      console.log(req)
      console.log(`virtual customers url: ${VIRTUAL_CUSTOMERS_URL}`)
      const message = await fetch(`${VIRTUAL_CUSTOMERS_URL}/simulate-orders?orderCount=${orderCount}`)
      console.log(message)
      res.status(200).json({ message: 'ok' })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
