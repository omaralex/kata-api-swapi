import swaggerUi from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { Router } from 'express';
import { createPerson, getAllPersons } from '../controllers/personController';
import { getPeople } from '../controllers/swapiController';

const swaggerDocument = YAML.load(path.join(__dirname, 'service.yml'));
const routerGet = Router();
routerGet.use('/docs', swaggerUi.serveWithOptions({ redirect: false }), swaggerUi.setup(swaggerDocument));
routerGet.get('/personas', getAllPersons);

const routerPost = Router();
routerPost.post('/personas', createPerson);

const routerSwapi = Router();
routerSwapi.get('/people/:id', getPeople);

export {
    routerGet,
    routerPost,
    routerSwapi
}

