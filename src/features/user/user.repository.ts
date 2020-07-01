import Bikes from '../shared/Bikes';
import { Bike } from '../shared/Bike.type';
import Tasks from '../shared/Tasks';
import { Pollicer } from '../shared/Pollicer.type';
import { GetFreePollicer } from '../tasks/task.repository';
import { ChangePollicerStateRepository } from '../admin/admin.repository';

export async function GetUserBikesRepository(userId : number | string)
{
    let getBikes = await Bikes.find( {"userId" : userId} ); 
    if(!getBikes || getBikes.length === 0 ){
        throw new Error("List is Empty");
    }
    return getBikes;
}

export async function CreateUserBikesRepository(userId : number | string, bike : Bike)
{
    let savedBike = await Bikes.create({
        userId : userId,
        model : bike.model,
        color : bike.color,
        name : bike.name,
        description : bike.description
    })
    let pollicer : Pollicer = await GetFreePollicer();
    console.log(pollicer);
    if(pollicer)
    {
        await ChangePollicerStateRepository(pollicer._id, false)
        await Tasks.create({
            bikeId : savedBike._id,
            pollicerId : pollicer._id,
            beginDate : new Date(),
            isDone : false
        })
    }
    else
    {
        await Tasks.create({
            bikeId : savedBike._id,
            pollicerId : "none",
            beginDate : new Date(),
            isDone : false
        })  
    }
}