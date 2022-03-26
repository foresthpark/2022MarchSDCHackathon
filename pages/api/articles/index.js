// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import state from "./_dataStore"
const store = state()

export default async function handler(req, res) {
    const response = await store.getArticles()
    res.status(200).json(response)
}
