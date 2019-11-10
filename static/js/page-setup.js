/* Modularize - by Justin O'Boyle
   for CS-146 */

window.__STATE = {}

/* Modularize - by Justin O'Boyle
   for CS-146 */

(function() {
    window.requireAsync = async function(path = null, options = {}) {
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
    window.requireGlobal = function(path = null) {
        if(path == null) {
            throw("Path is not specified!")
            return
        }
        let el = document.createElement('script')
        el.src=path
        document.head.appendChild(el)
    }
})()

// I *am aware* that this is FAR from foolproof!
// 
/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
const sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};

/* Templates - by Justin O'Boyle
   for CS-146 */
// I know it's not as good as React but at least I can load my page
// in under 100mb ;)
(function() {
    
    // A bit hacky but thanks StackOverflow :)
    const genUUID = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const LOCAL_OVERRIDE = genUUID()
    let uuidRegistry = {}
    let listeners = {}
    let components = {}
    window.registerComponent = function(name, u) {
        components[name] = {
            '___TEMPLATE___OVERRIDE___': LOCAL_OVERRIDE,
            ...u,
            name: name,
            method: 'componentSpec',
            rendered: false
        }
    }
    window.rawHTMLComponent = html => {
        return JSON.stringify({
            ___TEMPLATE___OVERRIDE___: LOCAL_OVERRIDE,
            method: 'raw_html_this_is_very_unsafe',
            content: html
        })
    }
    window.component = function(name, props = {}, state = {}) {
        if(!components[name])
            throw("Component " + name + " not registered!")
        let spec = components[name]
        let uuid = genUUID()
        let build = {
            ...spec,
            props, state,
            uuid
        }
        if(!uuidRegistry[uuid]) {
            uuidRegistry[uuid] = build
            uuidRegistry[uuid].setState = function(newState) {
                uuidRegistry[uuid].state = {...newState, ...uuidRegistry[uuid].state}
                if(listeners[uuid])
                    for(let l of listeners[uuid]) {
                        l(uuidRegistry[uuid].state)
                    }
            }
        }
        return build
    }
    const formatProps = function (props) {
        let build = []
        for(let i in props) {
            build.push(sanitizeHTML(i) + '=' + `"${encodeURIComponent(props[i])}"`)
        }
        return build.join(' ')
    }
    window.sanitize = function(strings, ...values) {
        // cheers, Wes Bos!: https://wesbos.com/sanitize-html-es6-template-strings/
        return strings.reduce((prev, next, i) => `${prev}${next}${sanitizeHTML(values[i])} || ''}`, '')
    }
    window.importComponents = function (components = []) {
        components.forEach(c => window.requireGlobal('/js/components/' + c + '.js'))
    }
    window.pageTemplate = function(raw = [], ...args) {
        if(!args)
            args = []
        let uuid = genUUID() // Let's keep track of state!
        // Time to sanitize sensitive input
        const newArgs = []
        for(let o of args) {
            try {
                o = JSON.parse(o)
            }catch(e) {}
            if((o +'').startsWith('[object') || typeof o == 'object') {
                // i know this is weird
                if(o['___TEMPLATE___OVERRIDE___'] && o['___TEMPLATE___OVERRIDE___'] == LOCAL_OVERRIDE) {
                    // if(o.uuid)
                    //     uuid = uuid
                    switch(o.method) {
                        case 'raw_html_this_is_very_unsafe':
                            o = o.content || ''
                            break
                        case 'component':
                            o = o.content || ''
                            break
                        case 'componentSpec':
                            o = o.render(o.props || {}, o.state || o.defaultState || {})
                            break
                        default:
                            return sanitizeHTML(o.toString())
                    }
                } else {
                    o = sanitizeHTML(JSON.stringify(o))
                }
            } else {
                o = sanitizeHTML(o)
            }
            newArgs.push(o)
        }
        let html = raw.reduce((prev, next, i) => `${prev}${next}${newArgs[i]|| ''}`, '')
        let ret = `<t-render ${formatProps({uuid: uuid})}>${html}</t-render>`
        return JSON.stringify({
            content: ret,
            '___TEMPLATE___OVERRIDE___': LOCAL_OVERRIDE,
            method: 'component',
            rendered: true
        })
    }
    
    function bindComponentToElement(el, component) {
        let uuid = component.uuid
        if(!listeners[uuid])
            listeners[uuid] = []
        listeners[uuid].push(function() {
            el.innerHTML = component.render(component.props, component.state).content
        })
        const render = JSON.parse(component.render(component.props, component.state))
        el.innerHTML = render.content
    }

    function node(nodeName, nodeValue) {
        let a = {}
        a[nodeName] = nodeValue
        return a
    }
    setTimeout(() => {
        Object.values(document.getElementsByTagName('t-compose')).forEach(el => {
            let defaultState = {}
            let defaultProps = {}
            let name = el.getAttribute('renderComponent')
            let elTagStateArr = Object.values(el.getElementsByTagName('t-state'))
            if(!components[name]) {
                throw("Component not found: " + name)
            }
            let container = components[name]
            defaultProps = {...(Object.values(el.attributes).map(({nodeName, nodeValue})=>node(nodeName, nodeValue)))}
            defaultState = {...(container.defaultState || {})}
            if(elTagStateArr.length > 0) {
                defaultState = {...JSON.parse(elTagStateArr.innerHTML)}
            }
            const comp = window.component(name, defaultProps, defaultState)
            bindComponentToElement(el, comp)
        })
    }, 1)

})()