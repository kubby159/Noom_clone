import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
//유저들이 /public 으로 이동할 때 public 폴더 내용을 볼 수 있음.

//catchall url
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function handleConnection(socket) {
  console.log(socket);
}
//on() : event가 발동하는 걸 기다린다.
wss.on("connection", handleConnection);

server.listen(3000, handleListen);
