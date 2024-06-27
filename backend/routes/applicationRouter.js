import express from "express"
import {employerGetAllApplication,jobSeekerDeleteApplication,jobSeekerGetAllApplication,postApplication} from "../controllers/applicationController.js"
import { isAuthorised } from "../middleware/auth.js"

const router = express.Router()
router.get("/jobSeeker/getall",isAuthorised,jobSeekerGetAllApplication)
router.get("/employer/getall",isAuthorised,employerGetAllApplication)
router.delete("/delete/:id",isAuthorised,jobSeekerDeleteApplication)
router.post("/post",isAuthorised,postApplication)
export default router ;   