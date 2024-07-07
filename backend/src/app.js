import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { User } from "../src/models/user.model.js"
const app = express();

// middleware start

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));

app.use(cookieParser());

// middleware end

app.post('/api/user', async (req, res) => {
  console.log('this is login url====>',req.body);
  const {name, age} = req.body
  const user = await User.create({
  name,
  age
  })

  res.json({"msg":'user login successfully!', name:user.name, age:user.age , _id:user.id})
})

app.get('/api/users', (req, res) => {
    console.log('this is login url====>');
    res.json({"msg":"user login successfully!"})
})

export { app };
