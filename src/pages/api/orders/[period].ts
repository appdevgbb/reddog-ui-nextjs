import type { NextApiRequest, NextApiResponse } from 'next/types'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const SERVER_URL = process.env.SERVER_URL

  const {
    query: { period },
    method
  } = req

  switch (method) {
    case 'GET':
      // Get orders from backend
      const chartKv = await fetch(`${SERVER_URL}/orders/${period}`)
      const chartKvJson = await chartKv.json()
      res.status(200).json(chartKvJson)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
