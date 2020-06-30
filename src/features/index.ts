import { Router } from "express";
import * as express from'express';
import adminRoutes from "./admin";
import userRoutes from "./user";

const router: Router = Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }));

router.use('/admin', adminRoutes);
router.use('/user', userRoutes);

export default router;