import type {Block} from "./blocks/Block";

export interface Slide {
    id: Number
    blocks: Block[]
    layout(): String
}