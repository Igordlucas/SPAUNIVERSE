export class Router{
    routes = {}
    add(routeName,page){
        this.routes[routeName]= page
    }

    route (event) {
    event = event || window.event
    event.preventDefault()
        
    window.history.pushState({},"", event.target.href)
        
    this.handle()
    }
    
    handle (){
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
   
    fetch(route)
    .then(data => data.text())
    .then(html => {
    document.querySelector('#app').innerHTML=html
    })
    }
}



// const route = (event) => {
//     event = event || window.event
//     event.preventDefault()
//     window.history.pushState({},"",event.target.href)
//     handleLocation()
// }
// const routes = {
// //  404: "/404.html",
//  "/": "/index.html",
//  "/universe" : "/universe.html",
//  "/explore": "/explore.html",

// }
// const handleLocation = async () => {
//     const path = window.location.pathname
//     const route = routes [path] || routes [404]
//     const html = await fetch(route).then((data)=>data.text())
//     document.getElementsById('mainPage').innerHTML = html
// }
// window.onpopstate = handleLocation
// window.route = route

// handleLocation()