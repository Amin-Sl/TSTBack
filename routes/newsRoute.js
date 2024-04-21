import express from "express"
import { createNews, deleteNews, getCatNews, getDetailNews, getLastNews, getNews, getNewsById, popularNews, updateNews } from "../controllers/NewsController.js"
import {verifyToken} from "../middleware/VerifyTokne.js"

const router = express.Router()


router.get("/api/news/lastnews", getLastNews)
router.get("/api/news/detail/:id", getDetailNews)
router.get("/api/news/popular", popularNews)
router.get("/api/news/cat-news", getCatNews)


router.get("/api/news", verifyToken, getNews)
router.post("/api/news", verifyToken, createNews)
router.get("/api/news/:id", verifyToken , getNewsById)
router.put("/api/news/:id", verifyToken, updateNews)
router.delete("/api/news/:id", verifyToken, deleteNews)

export default router;