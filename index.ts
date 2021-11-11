import express from "express";
import sequelize from "./config/config";
import Customer from "./models/Customer/customer";
import { customerRoutes } from "./routes/Customer";
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, async () => {
    await sequelize.sync({force: true})
    console.log(`App running on ${port}`)
})
app.use(express.json());

app.use(customerRoutes(Customer));
