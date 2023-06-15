
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsPage,
        },
        {
            path: "/about",
            name: "about",
            component: AboutUsPage,
        },
    ],
});

export { router }; 