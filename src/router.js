import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export function createRouter() {
  return new Router({
    // 由于用了 history 模式, 将来就不能像其他项目一样, 通过 cdn 来访问页面了.
    mode: "history",
    routes: [
      {
        path: "/page1",
        name: "page1",
        component: () =>
          import(/* webpackChunkName: "page1" */ "./views/page1/index.vue")
      },
      {
        path: "/page2",
        name: "page2",
        component: () =>
          import(/* webpackChunkName: "page2" */ "./views/page2/index.vue")
      },
      {
        path: "/page3",
        name: "page3",
        component: () =>
          import(/* webpackChunkName: "page3" */ "./views/page3/index.vue")
      },
    ],
  });
}
