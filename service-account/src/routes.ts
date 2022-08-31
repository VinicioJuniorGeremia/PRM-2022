import { Router } from 'express';

//Instancio o reouter do express
const routes = Router();

routes.post('/admin/signin', AuthController.signInAdmin);


export default routes;