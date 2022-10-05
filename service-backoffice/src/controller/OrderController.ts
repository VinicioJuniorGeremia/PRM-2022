import { Order } from '../entity/Order';
import { Request, Response } from "express";
import { TypeORMError } from "typeorm";

class OrderController {

    public async index(request: Request, response: Response) {
        try {
            const brands = await Order.find();

            return response.json(Order);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async create(request: Request, response: Response) {
        try {
            const brand = await Order.save(request.body);

            return response.status(201).json(Order);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async show(request: Request, response: Response) {
        try {
            
            const {id} = request.params;

            if (!id) {
                return response.status(400).json({message: 'Parâmetro ID não informado'})
            }

            const found = await Order.findOneBy({
                id: Number(id)
            });

            if (!found) {
                return response.status(404).json({message: 'Recurso não encontrado'})
            }

            return response.json(Order);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async canceledDate(request: Request, response: Response) {
        try {
            //Pego o ID que foi enviado por request param
            const {id} = request.params;

            //Verifico se veio o parametro ID
            if (!id) {
                return response.status(400).json({message: 'Parâmetro ID não informado'})
            }

            //Busco a entity no banco pelo ID
            const found = await Order.findOneBy({
                id: Number(id)
            });

            //Verifico se encontrou a order
            if (!found) {
                return response.status(404).json({message: 'Recurso não encontrado'})
            }

            //Determina a data de cancelamento (este campo indica que o pedido está cancelado)
            request.body.canceledDate = new Date();

            //Atualizo com os nos dados
            await Order.update(found.id, request.body);

            const novo = request.body;

            //Altero o ID para o que veio no request
            novo.id = found.id;

            //Retorno a entidade encontrada
            return response.json(novo);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }
}

export default new OrderController();