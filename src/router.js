import { createRouter, createWebHashHistory } from "vue-router";
import * as localForage from "localforage";
import RsmpRegister from "./components/Rsmp-Register.vue";
import RsmpTForm from "./components/Rsmp-T-Form.vue";
import NewLogin from "./components/NewLogin.vue";
import RsmpDashboard from "./components/Rsmp-Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: NewLogin,
  },
  {
    path: "/register",
    name: "register",
    component: RsmpRegister,
  },
  {
    path: "/form",
    name: "form",
    component: RsmpTForm,
  },
  {
    path: "/home",
    name: "home",
    component: RsmpDashboard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// ACtivate for auth
router.beforeEach(async (to, from, next) => {
  const authUser = await localForage.getItem("authPartnerUser");
  if (to.name !== "login" && !authUser) {
    if (to.name == "register") {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    if (to.name == "login" && authUser != null) {
      next({ name: "home" });
    } else {
      next();
    }
  }
});

export default router;
