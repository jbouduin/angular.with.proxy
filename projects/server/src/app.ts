import * as express from 'express';
import * as bodyParser from 'body-parser';

import { IRouteService } from './services';
import container from './inversify.config';
import SERVICETYPES from './services/service.types';

class App {

  public app: express.Application;

  public constructor() {
    this.app = express();
    this.config();
    container.get<IRouteService>(SERVICETYPES.RouteService).setRoutes(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
