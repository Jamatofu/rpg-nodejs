import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as http from "http";
import * as io from "socket.io";
import { createServer, Server } from 'http';
import * as indexRoute from "./route";

class App {
  private PORT: number = 8080;
  public app: express.Application;
  public socket: io.Server;
  public server: Server;

  constructor() {
    this.app = express();
    this.app.use(express.static(__dirname + '/../../client'));

    this.server = createServer(this.app);
    this.socket = require('socket.io')(this.server);

    this.routes();
  }

  public static bootstrap(): App {
    return new App();
  }

  public startServer(): void {

    this.socket.on('connection', (client) => {
      console.log('User connected');

      client.on('logIn', (pseudo) => {
        console.log('Pseudo : ' + pseudo);
      });

      client.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });

    this.server.listen(this.PORT, () => {
      console.log("Starting server on port " + this.PORT);
    });
  }

  private routes() {
    this.app.get("/", function(req: express.Request, res: express.Response) {
      res.sendFile("index.html");
    });
  }
}

var server = App.bootstrap();
server.startServer();
