const express = require("express");
const indexRouter = require("./routes/index.router");
const authRouter = require("./routes/auth.router");

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log("Globl Middleware");
//   next();
// });

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(4000, () => {
  console.log("🚀 Server up and running");
});
