import {BaseEntity} from "./BaseEntity";

export interface User extends BaseEntity {

    created?: Date;

    username?: string;

    password?: string;

    token?: string;
}
