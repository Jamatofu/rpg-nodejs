import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as indexRoute from "./route";

class App {
    private PORT: number = 8083;
    public app: express.Application;

    constructor() {
      this.app = express();
      this.routes();
    }

    public static bootstrap(): App {
      return new App();
    }

    public startServer(): void {

    }

    private routes() {
      let router: express.Router;
      router = express.Router();

      var index: indexRoute.Index = new indexRoute.Index();

      router.get("/", index.index.bind(index.index));

      this.app.use(router);
    }
}
