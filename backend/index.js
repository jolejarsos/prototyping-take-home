import express from "express";
import http from "http";
import cors from "cors";

import controller from "./controller";

const PORT = 3333;

const app = express();
const server = http.createServer(app);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", controller);

server.listen(PORT, () => {
  console.log(`Server is listenning on ${PORT}`);
});
