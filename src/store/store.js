let items = [
  {
    name: "Search ResultA",
    tags: ["javascript"],
    date: Date.now(),
    href: "/article/justinoboyle/sresulta",
  },
  {
    name: "Search ResultB",
    tags: ["debugging"],
    date: Date.now() + 100,
    href: "/article/justinoboyle/sresultb",
  },
  {
    name: "Search ResultC",
    tags: ["debugging"],
    date: Date.now() + 200,
    href: "/article/justinoboyle/sresultc",
  },
  {
    name: "Search ResultD",
    tags: ["debugging"],
    date: Date.now() + 300,
    href: "/article/justinoboyle/sresultd",
  },
]
let count = 0
export default class DataStore {
  constructor(url) {
    this._apiURL = url
  }

  get postMetaStore() {
    return {
      items,
      checkForNew: async function(query, ping) {
        // await grabFromServerSomehow
        console.log("Query post meta database for", query)
        ping()
      },
    }
  }

  get postContentStore() {
    return {}
  }
}
