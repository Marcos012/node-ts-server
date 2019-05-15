

import * as express from 'express';
import { Application } from 'express';
import { obterProjetos, obterProjetosPorID } from './projeto-tecnico.route';


const app: Application = express();

app.route('/api/projetos-tecnicos').get(obterProjetos);

app.route('/api/projetos-tecnicos/:id').get(obterProjetosPorID);

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
