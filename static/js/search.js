;(() => {
  Object.values(document.getElementsByTagName("input")).map(
    a => (a.onkeyup = ({ target }) => alert("This search box is not yet functional, as there is no dynamic content on this page yet (it is just frontend HTML/CSS/JS, no backend server yet)."))
  )
})()
