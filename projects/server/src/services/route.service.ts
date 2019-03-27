import { Application, Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

export interface IRouteService {
  setRoutes(app: Application): void;
}

@injectable()
export class RouteService implements IRouteService {

  // constructor
  public constructor() { }

  public setRoutes(app: Application): void {
    app.route('*')
      .all((_request: Request, response: Response) => {
        response.sendStatus(404);
      });
  }
}
