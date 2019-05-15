import { Request, Response } from 'express';
import { projetosTecnicos } from './db-data';

export function obterProjetos(req: Request, res: Response) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(projetosTecnicos);
}

export function obterProjetosPorID(req: Request, res: Response) {

    const idProjetoTecnico = req.params.id;

    const _projetosTecnicos: any = projetosTecnicos;

    const projetoTecnico = _projetosTecnicos.find(() => projetoTecnico.id === idProjetoTecnico);

    res.status(200).json(projetoTecnico);
}
