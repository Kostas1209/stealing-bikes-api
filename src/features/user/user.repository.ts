import Bikes from '../shared/Bikes';
import { Bike } from '../shared/Bike.type';

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
    Bikes.create({
        userId : userId,
        model : bike.model,
        color : bike.color,
        name : bike.name,
        description : bike.description
    })
}