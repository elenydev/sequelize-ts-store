import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  AllowNull,
  NotEmpty,
  ForeignKey,
  BelongsTo,
  HasOne,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import {
  OrderAttributes,
  PostOrderAttributes,
} from "../../infrastructure/interfaces/Models/Order";
import Customer from "../Customer/customer";
import Payment from "../Payment/payment";
import Product from "../Product/product";

@Table
class Order extends Model<OrderAttributes, PostOrderAttributes> {
  @ForeignKey(() => Customer)
  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    unique: true,
    primaryKey: true,
  })
  id!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @BelongsTo(() => Customer, 'id')

  @HasMany(() => Product, 'productId')
  products!: Product[];

  @HasOne(() => Payment, 'paymentId ')
  payment!: Payment;

  @HasOne(() => Customer, 'customerId')
  customerId!: string;
}

export default Order;
