import express from "express"
import {verifyToken} from "../middleware/VerifyTokne.js"
import { createVideo, deleteVideo, getAlllVideo, getSingleVideo } from "../controllers/VideoController.js";

const router = express.Router()


router.post("/api/create-video", verifyToken, createVideo)
router.get('/api/get-video', verifyToken, getAlllVideo)
router.get("/api/single-video", getSingleVideo)
router.delete("/api/delete-video/:id", verifyToken, deleteVideo)


export default router;