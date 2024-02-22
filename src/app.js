import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) //middlewares configurations:-this is for json request limiting controls,
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
})) //this config for url encding
app.use(express.static("public")) //this is for file,pdf,or imaage storing it is genrally stored in public assets

app.use(cookieParser())


export {app};