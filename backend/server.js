import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

dotenv.config();

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const db= new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();

const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"../frontend/static")));

app.set("views", path.join(__dirname, "../frontend/templates"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.get("/",(req,res)=>{
    res.render("index.html");
});

app.get("/project1", (req,res) => {
    res.render("project1.html");
});

app.get("/project2", (req,res) => {
    res.render("project2.html");
});

app.get("/project3", (req,res) => {
    res.render("project3.html");
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is live on PORT: ${process.env.PORT || 3000}`);
});