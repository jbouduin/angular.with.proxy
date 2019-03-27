import { Container } from 'inversify';

import SERVICETYPES from './services/service.types';

import { IRouteService, RouteService } from './services';

const container = new Container();

// services
container.bind<IRouteService>(SERVICETYPES.RouteService).to(RouteService);

export default container;
