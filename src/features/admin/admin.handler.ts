import { Request, Response, } from 'express';
import { GetPollicerTaskRepository, ChangePollicerTaskRepository } from './admin.repository';


export async function GetAdminTask(req: Request, resp: Response)
{
    try{
        console.log(req.query)
        let adminId = req.query.adminId
        console.log(`Admin Id ${adminId}`);
        let task = await GetPollicerTaskRepository(adminId);
        console.log(task)
        return resp.status(200).send({
            success: true,
            data: task
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
        ChangePollicerTaskRepository(adminId);

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