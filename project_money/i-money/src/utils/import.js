import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/authPage"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/defaultPage"))
  );
}
