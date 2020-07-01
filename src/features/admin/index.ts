import { Router } from "express";
import { GetAdminTask, ChangeAdminTask } from "./admin.handler";

const adminRoutes : Router = Router();

adminRoutes.get('/task',  GetAdminTask) // current task
//adminRoutes.post('/take_task',) // 
adminRoutes.put('/task', ChangeAdminTask) // task is done 

export default adminRoutes;