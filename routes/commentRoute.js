import express from "express"
import { active, createComment, deleteComment, getAllComment, getComment, unActive, updateComment } from "../controllers/CommentController.js";
import {verifyToken} from "../middleware/VerifyTokne.js"


const router = express.Router()


router.get("/api/comment/:newsId", getComment)
router.get("/api/comment", verifyToken, getAllComment)
router.post("/api/comment", createComment)
router.put("/api/comment/active/:id", verifyToken, active)
router.put("/api/comment/unactive/:id", verifyToken, unActive)
router.put("/api/comment/:id", verifyToken, updateComment)
router.delete("/api/comment/:id", verifyToken, deleteComment)

export default router;