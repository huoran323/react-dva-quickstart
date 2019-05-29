import dva from "dva";
import "./index.css";
import { createBrowserHistory as createHistory } from "history";

// 1. Initialize 创建dva的实例
const app = dva({
  history: createHistory(),
  initialState: {
    products: [{ name: "dva", id: 1 }, { name: "antd", id: 2 }]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
//引入产品列表的models,可以同时调用多个models
// app.model(require("./models/products").default);
// app.model(require("./models/counter").default);
// 使用这个方法，可以避免上面这种多个引入的方式，通过循环遍历的方式来进行引入
require("./models").default.forEach(key => app.model(key.default));

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
