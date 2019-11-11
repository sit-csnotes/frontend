/* Sanitize and encode all HTML in a user-submitted string
* (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
* @param  {String} str  The user-submitted string
* @return {String} str  The sanitized string
*/
const sanitizeHTML = function (str) {
   var temp = document.createElement('div');
   temp.textContent = str;
   return temp.innerHTML;
};


(() => {

    document.getElementsByClassName("submit-new-post")[0].onclick=() => alert("This feature is not yet enabled, as this project has no backend server yet.")

    document.getElementsByTagName("textarea")[0].onkeyup = ({target}) => document.getElementsByClassName("editor-section")[1].innerHTML=`<h2>Preview</h2>\n${marked(sanitizeHTML(target.value))}`


})()