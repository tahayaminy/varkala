import {BaseEntity} from "./BaseEntity";

export interface Category extends BaseEntity {

    name?: string;

    description?: string

    icon?: string; // mitoni esme icon ke to github dario inja bezari az hamin bekhoni on icon ro

    mainImage?: string;
}
