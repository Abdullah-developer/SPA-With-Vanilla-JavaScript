import Dashboard from './views/dashboard.js'
import Posts from './views/posts.js'
import Settings from './views/settings.js'
import PostView from './views/postView.js'

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const getParams = match => {
    const values = match.result.slice(1)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }))
}

const router = async () => {
    const routes = [
        {path: '/', view: Dashboard},
        {path: '/posts', view: Posts},
        { path: "/posts/:id", view: PostView }, 
        {path: '/settings', view: Settings},
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null)
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }
    const view = new match.route.view(getParams(match)); 
    document.querySelector("#app").innerHTML = await view.getHTML()
}

const navigateTo = url => {
    window.history.pushState(null, null, url);
    router();
}

window.addEventListener('popstate', router)

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href)
            // console.log(e.target.href)
        }
    })
    router()
})