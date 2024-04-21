import express from "express";
import db from "./config/Database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/userRoute.js"
import categoryRoutes from "./routes/categoryRoute.js"
import videoRoutes from "./routes/videoRoutes.js"
import newsRoutes from "./routes/newsRoute.js"
import commentRoutes from "./routes/commentRoute.js"
import sendEmailRoutes from "./routes/sendEmailRouter.js"
import cors from "cors";

// B(*tWTy(4uUA!wA@

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log("database connected"); 
     await db.sync()
} catch (error) {
     console.log(error)
}

app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"))
app.use(cookieParser());
app.use(userRoutes);
app.use(categoryRoutes);
app.use(videoRoutes);
app.use(newsRoutes);
app.use(commentRoutes);
app.use(sendEmailRoutes);



app.listen(5000, ()=> console.log("server is running"))