import { createWebHistory, createRouter} from 'vue-router'
import routes from "./routes"

const router = createRouter({
    //history: createWebHistory(process.env.Base_URL),
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ["/login"]
//     const authRequired = !publicPages.includes(to.path)
//     const loggedIn = localStorage.getItem("user")

//     if (authRequired && !loggedIn) {
//         return next("/login")
//     }

//     next()
// })

export default router