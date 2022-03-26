const fetchArticles = async () => {
  if (articleIds.length == 0) {
    articleIds = await fetchData(
      `https://hacker-news.firebaseio.com/v0/jobstories.json`
    );
  }
  const calls = [];

  for (let articleId of articleIds) {
    calls.push(
      fetchData(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
    );
  }
  const results = await Promise.all(calls);
  for (let article of results) {
    articles[article.id] = article;
  }
  return Object.values(articles);
};

const fetchData = async (url) => {
  return await new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getArticles = async () => {
  if (Object.keys(articles).length === 0) {
    await fetchArticles();
  }
  return Object.values(articles);
};

const getArticleById = async (id) => {
  if (!articles[id]) {
    let article;
    try {
      article = await fetchData(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      articles[id] = article;
    } catch (e) {
      return null;
    }
  }
  return articles[id];
};

let articles = {};
let articleIds = [
  30813449, 30804591, 30801058, 30799366, 30795283, 30792539, 30788655,
  30787009, 30783304, 30780609, 30777542, 30775763, 30771477, 30768617,
  30765008, 30763388, 30759644, 30756596, 30753031, 30746568, 30744348,
  30741947, 30740743, 30737547, 30735425, 30733094, 30731782, 30727461,
  30724660, 30721063, 30719349, 30715830, 30713338, 30710172, 30706252,
  30704042, 30701298, 30697704, 30691648, 30687796, 30682418, 30674912,
  30665661, 30652753, 30650791, 30638830, 30634862, 30629213, 30613531,
  30598974, 30597189, 30593267, 30586733, 30578921, 30566738, 30560505,
  30553515, 30543540, 30539822, 30537996,
];

const inMemoryStore = () => ({
  getArticleById,
  getArticles,
});

export default inMemoryStore;
