import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import articlesRoutes from "./routes/articles.js";
import downloadsRoutes from "./routes/downloads.js";
import faqRoutes from "./routes/faqs.js";
import relnotesRoutes from "./routes/relnotes.js";
import homeRoutes from "./routes/home.js";
import usersRoutes from "./routes/users.js";
import dotenv from "dotenv";

const app = express();
dotenv.config({ silent: true });

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/", homeRoutes);
app.use("/articles", articlesRoutes);
app.use("/downloads", downloadsRoutes);
app.use("/faqs", faqRoutes);
app.use("/relnotes", relnotesRoutes);
app.use("/users", usersRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Connection works and is running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
