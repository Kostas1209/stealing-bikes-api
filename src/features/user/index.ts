import { Router } from "express";
import { GetUserStealing, PostUserStealing } from "./user.handler";

const userRoutes : Router = Router();

userRoutes.get('/report', GetUserStealing) // get you reports
userRoutes.post('/report', PostUserStealing) // new stealing

export default userRoutes