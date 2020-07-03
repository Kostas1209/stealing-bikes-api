import Tasks from '../shared/Tasks';
import { Pollicer } from '../shared/Pollicer.type';
import Pollicers from '../shared/Pollicers';

export async function GetFreePollicer() : Promise<Pollicer>
{
    return Pollicers.findOne({"isFree": true});
}

export async function GetFreeTask()
{
    let task = await Tasks.findOne({"pollicerId": "none", "isDone" : false});
    return task
}

export async function SetPollicerOnTask(taskId, adminId)
{
    await Tasks.findOneAndUpdate({"_id" : taskId}, {"pollicerId" : adminId});
}