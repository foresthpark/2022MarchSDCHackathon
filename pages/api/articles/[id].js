import state from "./_dataStore"
const store = state()

export default async function handler(req, res) {
  const article = await store.getArticleById(req.query.id)
  console.log(article, req.query.id)
  if(!article) {
    res.status(404).json({ "error": "Not Found" })
  } else {
    res.status(200).json(article)
  }
}