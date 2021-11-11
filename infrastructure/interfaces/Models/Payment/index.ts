import { Optional } from "sequelize";
import Order from "../../../../models/Order/order";

export interface PaymentAttributes {
  id: string;
  name: string;
  isDefault: boolean;
  orders?: Order[];
}

export interface CreatePaymentAttributes extends Optional<PaymentAttributes, "id"> {}
