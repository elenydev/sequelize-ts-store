import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  NotEmpty,
  AllowNull,
  ForeignKey,
  BelongsToMany,
} from "sequelize-typescript";
import {
  CreatePaymentAttributes,
  PaymentAttributes,
} from "../../infrastructure/interfaces/Models/Payment";
import Order from "../Order/order";

@Table
class Payment extends Model<PaymentAttributes, CreatePaymentAttributes> {
  @ForeignKey(() => Order)
  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    unique: true,
  })
  id!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: DataType.BOOLEAN,
  })
  isDefault!: boolean;

  
  @BelongsToMany(() => Order, 'paymentId', 'id')
  orders!: Order[]
}

export default Payment;
