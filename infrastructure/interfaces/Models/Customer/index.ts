import { Optional } from "sequelize/types";
import Order from "../../../../models/Order/order";

export interface CustomerAttributes {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  orders?: Order[];
}

export interface PostCustomerAttributes
  extends Optional<CustomerAttributes, "id"> {}
