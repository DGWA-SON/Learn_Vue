import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/global.css";

import { registerGlobalComponent } from "./utils/import";
import { projectAuth } from "./configs/firebase";

let app;

// ban đầu nó là null ,nê khi reload nó sẽ chưa nhận đc ở firebase , hàm này nếu onAuth check xem có dữ liệu chwua , đầu tiên nó sẽ chạy if và check
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    registerGlobalComponent(app);

    app.use(router);

    app.mount("#app");
  }
});
