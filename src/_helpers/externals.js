// User Component  for User registration
function body_script(src) {
    if (document.querySelector("script[src='" + src + "']")) {
        return
    }

    const script = document.createElement("script")
    script.setAttribute("src", src)
    script.async = true
    // script.setAttribute("type", "text/javascript")
    document.body.appendChild(script)
}

function head_link(href) {
    if (document.querySelector("link[href='" + href + "']")) {
        return
    }

    let link = document.createElement("link")
    link.setAttribute("href", href)
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("type", "text/css")
    link.async = true
    document.head.appendChild(link)
}

function delete_script(src) {
    let el = document.querySelector("script[src='" + src + "']")
    if (el) {
        el.remove()
    }
}

function delete_link(href) {
    let el = document.querySelector("link[href='" + href + "']")
    if (el) {
        el.remove()
    }
}

export { body_script, head_link, delete_script, delete_link }