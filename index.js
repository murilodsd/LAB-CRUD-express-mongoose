import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import albumRoute from "./routes/album.router.js";
import purchaseRoute from "./routes/purchase.router.js";


dotenv.config();

connect();

const app = express();
app.use(express.json());

// SUAS ROTAS AQUI!!! v v v não esqueça de importá-las!
app.use("/albums", albumRoute);
app.use("/purchases", purchaseRoute);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running on port: ${process.env.PORT}!`);
});
