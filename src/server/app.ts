import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as http from "http";
import * as io from "socket.io";
import * as indexRoute from "./route";

class App {
    private PORT: number = 8080;
    public app: express.Application;
    public socket;

    constructor() {
      this.app = express();
      console.log(__dirname);
      this.app.use(express.static(__dirname + '/../../client'));
      // this.socket = io(this.server);
      this.routes();
    }

    public static bootstrap(): App {
      return new App();
    }

    public startServer(): void {
      this.app.listen(this.PORT, () => {
        console.log("Starting server on port " + this.PORT);
      });

      // this.socket.on('connection',  (client) => {
      //   console.log('User connected');
      // });
    }

    private routes() {
      this.app.get("/", function(req: express.Request, res: express.Response) {
          res.sendFile("index.html");
      });
    }
}

var server = App.bootstrap();
server.startServer();
