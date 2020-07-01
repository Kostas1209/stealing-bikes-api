import Tasks from '../shared/Tasks';
import { Pollicer } from '../shared/Pollicer.type';
import Pollicers from '../shared/Pollicers';

export async function GetFreePollicer() : Promise<Pollicer>
{
    return Pollicers.findOne({"isFree": true});
}

export function GetFreeTask()
{
    return Tasks.findOne({"pollicerId": "none", "isDone" : false});
}

export async function SetPollicerOnTask(taskId, adminId)
{
    await Tasks.findOneAndUpdate({"_id" : taskId}, {"pollicerId" : adminId});
}