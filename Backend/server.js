import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

 dotenv.config({
    path : "./.env"
 });

 const app = express();

 app.use(cors({
    origin : ['http://localhost:5173'],
    credentials : true
 }));
 app.use(express.json());

 // import routes
 import authRouter from "./router/authRoutes.js"
import providerRouter from "./router/providerRoutes.js"
import testimonialRoutes from './router/testimonialRoutes.js'
import reviewsRoutes from "./router/reviewRoutes.js"

app.use("/api/auth", authRouter);
app.use("/api/providers", providerRouter);
 app.use("/api/testimonials", testimonialRoutes);
 app.use("/api/reviews", reviewsRoutes);

// http://localhost/8000/api/auth/register


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI)
    // .then(() => {
    //     app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    // })
    // .catch((err) => console.log(err)
    // )