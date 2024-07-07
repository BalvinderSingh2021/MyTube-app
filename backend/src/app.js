import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware start

app.get('/login', (req, res) => {
    console.log('this is login url====>');
    res.json({"msg":"user login successfully!"})
})

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

export { app };