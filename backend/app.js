import express from "express";
import { db } from "./Database/db.js";
import dotenv from "dotenv";
import router from "./router/messageRoutes.js";
import cors from "cors";
const app = express();

dotenv.config({path: "./Config/config.env"});

app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["POST"],
      credentials: true,
    })
  );
app.use(cors({ origin: 'http://localhost:5173' }));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.json({
    success:true,
    message:"Habibi COme to Dubai!!",
  });
});


app.use("/api/v1/message", router);


db();

export default app;