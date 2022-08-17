import { Brand } from './../entity/Brand';
import { Request, response, Response } from "express";
import { TypeORMError } from 'typeorm';


class BrandController {

    public async index(request: Request, reponse: Response) {
        try {
            //Buscar todos os registros do banco
            const brands = await Brand.find();

            //Retorno a lista
            return reponse.json(brands);
        
        
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async create(request: Request, reponse: Response) {
        try {
            //Salvo no banco a entidade que veio na requisição 
            const brand = await Brand.save(request.body);

            //Retorno a entidade referida
            return response.status(201).json(brand);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async show(request: Request, reponse: Response) {
        try {
            //Pego i ID que foi enviado por request param
            const {id}= request.params;

            //Verifico se veio o parametro ID
            if (!id) {
                return response.status(400).json({message: 'Parametro id não informado'})
            }

            //Busco a entity no banco peli id
            const found = await Brand.findOneBy({
                id: Number(id)
            });

            //verifico se encontrou a brand
            if (!found) {
                return response.status(400).json({message: 'Recurso não encontrado'})
            }
        
            return response.json(found);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async update(request: Request, reponse: Response) {
        try {
            //Pego i ID que foi enviado por request param
            const {id}= request.params;

            //Verifico se veio o parametro ID
            if (!id) {
                return response.status(400).json({message: 'Parametro id não informado'})
            }

            //Busco a entity no banco peli id
            const found = await Brand.findOneBy({
                id: Number(id)
            });

            //verifico se encontrou a brand
            if (!found) {
                return response.status(400).json({message: 'Recurso não encontrado'})
            }
            //Atualizo com os novos dados
            const brand = await Brand.update(id, request.body)
        
            return response.json(brand);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async remove(request: Request, reponse: Response) {
        try {
            //Pego i ID que foi enviado por request param
            const {id}= request.params;

            //Verifico se veio o parametro ID
            if (!id) {
                return response.status(400).json({message: 'Parametro id não informado'})
            }

            //Busco a entity no banco peli id
            const found = await Brand.findOneBy({
                id: Number(id)
            });

            //verifico se encontrou a brand
            if (!found) {
                return response.status(400).json({message: 'Recurso não encontrado'})
            }

            //Removo o registro baseado no ID
            await found.remove();
        
            //Retorno status 204 que é sem retorno
            return response.status(204).json();
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

}

export default new BrandController();