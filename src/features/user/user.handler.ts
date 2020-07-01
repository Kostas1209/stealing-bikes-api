import { Request, Response, } from 'express';
import { GetUserBikesRepository, CreateUserBikesRepository } from './user.repository';
import { Bike } from '../shared/Bike.type';

export async function GetUserStealing(req: Request, resp: Response)
{
    try{
        console.log(req.query)
        let userId = req.query.userId;
        console.log(`user Id ${userId}`);
        let userBikes = await GetUserBikesRepository(userId);

        return resp.status(200).send({
            success: true,
            data: userBikes
        })
    }
    catch(error)
    {
        return resp.status(400).send({
            success: false,
            message: error.toString(),
            data: "Dismiss"
        })
    }
}

export async function PostUserStealing(req: Request, resp: Response)
{
    try{
        console.log(req.body)
        let userId = req.body.userId
        console.log(`User Id ${userId}`);
        let bike : Bike = {model: req.body.model, color: req.body.color, name : req.body.name, description : req.body.description}
        await CreateUserBikesRepository(userId,bike)

        return resp.status(200).send({
            success: true,
            data: "Success bike saved"
        })
    }
    catch(error)
    {
        return resp.status(400).send({
            success: false,
            message: error.toString(),
            data: "Dismiss save"
        })
    }
}