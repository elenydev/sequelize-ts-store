import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  AllowNull,
  NotEmpty,
  ForeignKey,
  BelongsToMany,
} from "sequelize-typescript";
import {
  PostProductAttributes,
  ProductAttributes,
} from "../../infrastructure/interfaces/Models/Product";
import Order from "../Order/order";

@Table
class Product extends Model<ProductAttributes, PostProductAttributes> {
  @ForeignKey(() => Order)
  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
    defaultValue: DataType.UUID,
    primaryKey: true,
    unique: true,
  })
  id!: string;

  @BelongsToMany(() => Order, 'productId', 'id')

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
    type: DataType.INTEGER,
  })
  quantity!: number;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.INTEGER,
  })
  prize!: number;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
  })
  description!: string;
}

export default Product;
