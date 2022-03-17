import {BaseEntity} from "./BaseEntity";
import {Discount} from "./Discount";

export interface Product extends BaseEntity {

    name?: string;

    description?: string;

    price?: number;

    discount?: Discount;

    category: number;

    image?: string[];

    reviews?: number;

    gender?: Gender;

}

export enum Gender {
    MEN = "MEN",
    WOMEN = "WOMEN"
}
