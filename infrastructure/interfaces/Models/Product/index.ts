import { Optional } from "sequelize/types";

export interface ProductAttributes {
    id: string;
    name: string;
    quantity: number;
    prize: number;
    description: string;
}

export interface PostProductAttributes extends Optional<ProductAttributes, 'id'> {}