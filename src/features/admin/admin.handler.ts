import { Request, Response, } from 'express';


export async function GetAdminTask(req: Request, resp: Response)
{
    try{
        console.log(req.body)
        let adminId = req.body.adminId
        console.log(`Admin Id ${adminId}`);
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

export async function ChangeAdminTask(req: Request, resp: Response)
{
    try{
        console.log(req.body)
        let adminId = req.body.adminId
        console.log(`Admin Id ${adminId}`);
        // repository method change 

        return resp.status(200).send({
            success: true,
            data: "Success changed"
        })
    }
    catch(error)
    {
        return resp.status(400).send({
            success: false,
            message: error.toString(),
            data: "Dismiss changes "
        })
    }
}