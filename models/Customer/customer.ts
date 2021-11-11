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
} from "sequelize-typescript";
import {
  CustomerAttributes,
  PostCustomerAttributes,
} from "../../infrastructure/interfaces/Models/Customer";
import Order from "../Order/order";

@Table
class Customer extends Model<CustomerAttributes, PostCustomerAttributes> {
  @ForeignKey(() => Order)
  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    unique: true,
    primaryKey: true,
  })
  id!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
  })
  firstName!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
  })
  lastName!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
  })
  password!: string;

  @HasMany(() => Order, "id")
  orders!: Order[];

  @BelongsTo(() => Order,  'id')
  order!: Order
}

export default Customer;
