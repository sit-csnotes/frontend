let items = []
let userposts = {}
const token = () => localStorage.token
let count = 0
export default class DataStore {
  constructor(url) {
    this._apiURL = url || "https://api.csnotes.app"
    this.token = localStorage.token
  }

  get postMetaStore() {
    return {
      items,
      checkForNew: async function(query, ping) {
        const _ft = await fetch(
          this._APIUrl +
            `/post?name=${encodeURIComponent(
              query.name || ""
            )}&search=${encodeURIComponent(query.search || "")}`
        )
        const obj = await _ft.json()
        if (obj.success) {
          for (let o of obj) {
            items.push(o)
            if (!userposts[o.poster]) {
              userposts[o.poster] = {}
            }
            userposts[o.poster][o.name] = o
          }
        }
        console.log("Coming back")
        ping()
      },
    }
  }

  get postContentStore() {
    return {
      userposts,
      checkForNew: async function(query, ping) {
        const _ft = await fetch(
          this._APIUrl +
            `/post?name=${encodeURIComponent(
              query.name || ""
            )}&search=${encodeURIComponent(query.search || "")}`
        )
        const obj = await _ft.json()
        if (obj.success) {
          for (let o of obj) {
            items.push(o)
            if (!userposts[o.poster]) {
              userposts[o.poster] = {}
            }
            userposts[o.poster][o.name] = o
          }
        }
        console.log("Coming back")
        ping()
      },
    }
  }
}
