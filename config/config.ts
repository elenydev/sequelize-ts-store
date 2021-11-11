/** @module Config/Sequelize */
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import Customer from '../models/Customer/customer.js';
import Order from '../models/Order/order.js';
import Payment from '../models/Payment/payment.js';
import Product from '../models/Product/product.js';


dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL ?? 'localhost:8000', {
    models: [Customer, Order, Payment, Product ],
    dialect: 'postgres',
    logging: false,
    port: 8000,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

export default sequelize;