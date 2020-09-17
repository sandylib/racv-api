import { Router } from "express";
import property from './property';

const routes = Router();

routes.use(property);


const rootRouter = Router();
export default rootRouter.use('/', routes);