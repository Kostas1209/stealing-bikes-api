import Tasks from '../shared/Tasks';
import Pollicers from '../shared/Pollicers';

export async function GetPollicerTaskRepository(adminId : number | string)
{
    let getTask = await Tasks.find( {"policerId" : adminId} ); 
    if(!getTask || getTask.length === 0 ){
        throw new Error("List is Empty");
    }
    return getTask;
}

export async function ChangePollicerTaskRepository(adminId : number | string)
{
    let task = await Tasks.find( {"policerId" : adminId} )
    await Tasks.findOneAndUpdat({"policerId" : adminId}, {isDone : !task.isDone});
}
