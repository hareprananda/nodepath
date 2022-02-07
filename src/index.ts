import express from "express";
import Database from "config/Database";
import Model from "model/model";
import api from "api/api";

const app = express();

Database.print();
Model.print();
api.print();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
