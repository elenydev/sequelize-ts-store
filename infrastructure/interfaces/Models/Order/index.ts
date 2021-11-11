import { Optional } from "sequelize/types";
import Payment from "../../../../models/Payment/payment";
import Product from "../../../../models/Product/product";

export interface OrderAttributes {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
  payment: Payment;
}

export interface PostOrderAttributes
  extends Optional<OrderAttributes, "id"> {}
