let items = [
  {
    name: "Search ResultA",
    tags: ["javascript"],
    date: Date.now(),
    poster: "justinoboyle",
    name: "sresulta",
  },
  {
    name: "Search ResultB",
    tags: ["debugging"],
    date: Date.now() + 100,
    poster: "justinoboyle",
    name: "sresultb",
  },
  {
    name: "Search ResultC",
    tags: ["debugging"],
    date: Date.now() + 200,
    poster: "justinoboyle",
    name: "sresultc",
  },
  {
    name: "Search ResultD",
    tags: ["debugging"],
    date: Date.now() + 300,
    href: "/article/justinoboyle/sresultd",
    poster: "justinoboyle",
    name: "sresultd",
  },
]
let userposts = {
  justinoboyle: {
    sresultb: {
      found: true,
      content: "THIS IS SOME CONTENT LOOOOOOOOOOOOOOOOOOOOOOOOOL",
      name: "Search ResultA",
      tags: ["javascript"],
      date: Date.now(),
      poster: "justinoboyle",
      name: "sresulta",
    },
  },
}
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
    return {
      userposts,
      checkForNew: async function(query, ping) {
        // await grabFromServerSomehow
        console.log("Query post content database for", query)
        ping()
      },
    }
  }
}
