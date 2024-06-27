import express from "express"
import {deleteJob, getAllJobs, getSingleJob, getmyJobs, postJob, updateJob} from "../controllers/jobController.js"
import { isAuthorised } from "../middleware/auth.js"
const router = express.Router()
router.get("/getall",isAuthorised,getAllJobs)
router.post("/post",isAuthorised,postJob)
router.get("/getmyjobs",isAuthorised,getmyJobs)
router.put("/update/:id",isAuthorised,updateJob) 
router.delete("/delete/:id",isAuthorised,deleteJob)
router.get("/:id", isAuthorised,getSingleJob);
export default router ; 