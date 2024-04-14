import { Router } from "express";
import { addSampleAdminData,
     addSamplePaymentData, 
     addSampleAccountData } from "./dboperation.controllers.js"

const router = Router()     

router.route("/admin").post(addSampleAdminData);
router.route("/payment").post(addSamplePaymentData);
router.route("/account").post(addSampleAccountData)


export default router