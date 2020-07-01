import { Request, Response, } from 'express';

export async function GetUserStealing(req: Request, resp: Response)
{
    try{
        console.log(req.body)
        let userId = req.body.userId
        console.log(`user Id ${userId}`);
        // repository method

        return resp.status(200).send({
            success: true,
            data: "Success"
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
        // repository method change 

        return resp.status(200).send({
            success: true,
            data: "Success saved"
        })
    }
    catch(error)
    {
        return resp.status(400).send({
            success: false,
            message: error.toString(),
            data: "Dismiss save "
        })
    }
}