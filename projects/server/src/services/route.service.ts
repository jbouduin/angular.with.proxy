import { Application, Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

import CONTROLLERTYPES from '../controllers/controller.types';

import { IHomeController } from 'controllers';


export interface IRouteService {
  setRoutes(app: Application): void;
}

@injectable()
export class RouteService implements IRouteService {

  // constructor
  public constructor(
    @inject(CONTROLLERTYPES.HomeController) private homeController: IHomeController
  ) { }

  public setRoutes(app: Application): void {

    app.route('/hello')
      .all((_request: Request, response: Response) => {
        this.homeController.HelloWorld(_request, response);
      });
    app.route('*')
      .all((_request: Request, response: Response) => {
        response.sendStatus(404);
      });
  }
}
