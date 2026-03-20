import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/dashboard", component: Dashboard },
  { path: "/register", component: Register},
  { path: "/novo-agendamento", component: () => import("../views/NewAppointment.vue") }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});