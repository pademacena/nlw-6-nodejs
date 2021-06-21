import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())

app.get("/test", (req, res) => {
  return res.send("Olá NLW")
});

app.post("/test-post", (req, res) => {
  return res.send("Ola Post")
})

app.listen(3000, () => {
  console.log("server is running in 3000 port");
});

