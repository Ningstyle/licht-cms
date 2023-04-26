import { createRouter, createWebHashHistory } from "vue-router";
const views = import.meta.glob("../views/**/*.vue", { eager: true });

const routes = (Object as any).keys(views).map((path: any) => {
  const name = path.match(/\.\/views\/(.*)\.vue$/)[1];
  console.log(name);
  return {
    name,
    path: name === "login/index" ? "/" : `/${name.toLowerCase()}`,
    component: (views as any)[path].default,
  };
});
routes.push({
  path: "/:pathMatch(.*)*",
  redirect: "/",
});
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});
export default router;
