import {Router} from './router.js'
import { backgroundChange } from './backgroundChange.js'

const navStyle1 = document.querySelector('nav :nth-child(2)')
const navStyle2 = document.querySelector('nav :nth-child(3)')
const navStyle3 = document.querySelector('nav :nth-child(4)')

const bodyPage = document.querySelector('body')
const backgroundChanges = backgroundChange({ bodyPage })
const router = new Router()
router.add('/',"/pages/home.html")
router.add('/universe',"/pages/universe.html")
router.add('/explore',"/pages/explore.html")
router.add(404,"/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route =()=>router.route()

navStyle1.addEventListener('click', backgroundChanges.home)
navStyle2.addEventListener('click', backgroundChanges.universe)
navStyle3.addEventListener('click', backgroundChanges.exploration)