import {BaseEntity} from "./BaseEntity";
import {Discount} from "./Discount";
import {Category} from "./Category";

export interface Product extends BaseEntity {

    name?: string;

    description?: string;

    price?: number;

    discount?: Discount;

    category: Category;

    images?: string[]; // This is for out list of uri for images

    reviews?: number;

    gender?: Gender;

}

export enum Gender {
    MEN = "MEN",
    WOMEN = "WOMEN"
}
