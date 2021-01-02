import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home";
import Map from "../components/Map"

Vue.use(VueRouter)

const routes = [
    { path: "/", component: Home, name: "home" },
    { path: "/map", component: Map, name: "map" }

]
export const router = new VueRouter({
    routes,
})

