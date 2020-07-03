import Tasks from '../shared/Tasks';
import Pollicers from '../shared/Pollicers';
import { GetFreeTask, SetPollicerOnTask } from '../tasks/task.repository';

export async function GetPollicerTaskRepository(adminId : number | string)
{
    let getTask = await Tasks.find( {"pollicerId" : adminId} ); 
    if(!getTask || getTask.length === 0 ){
        throw new Error("List is Empty");
    }
    return getTask;
}

export async function ChangePollicerTaskRepository(adminId : number | string)
{
    //let task = await Tasks.find( {"policerId" : adminId} )
    await Tasks.findOneAndUpdate({"pollicerId" : adminId, isDone : false}, {isDone : true, endDate: new Date()});
    let task = await GetFreeTask();
    console.log(task)
    if(task)
    {
        await SetPollicerOnTask(task._id, adminId);
    }
    else{
        await ChangePollicerStateRepository(adminId, true);
    }
}

export async function ChangePollicerStateRepository(adminId : number | string, state: boolean)
{
    await Pollicers.findOneAndUpdate({"_id" : adminId}, {isFree : state});
}