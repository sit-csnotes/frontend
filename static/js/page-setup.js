/* Modularize - by Justin O'Boyle
   for CS-146 */

(function() {
    window.requireAsync = await function(path = null, options = {}) {
        if(path == null) {
            throw("Path is not specified!")
            return
        }
        let module = {}
        // YES, this is unsafe! But the whole point of the function is to evaluate
        // JS from another source, so it's OK.
        // Be careful when using the entire function, though!
        eval(await (await fetch(path)).text())
        return module.exports || null
    }
})()