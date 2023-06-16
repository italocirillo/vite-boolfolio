
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
// import SingleProjectPage from "./pages/SingleProjectPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

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
            path: "/projects/:slug",
            name: "singleProject",
            component: () => import("./pages/SingleProjectPage.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: AboutUsPage,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFoundPage,
        },
    ],
});

export { router }; 