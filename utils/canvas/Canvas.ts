import type {Slide} from "~/utils/canvas/Slide";

interface Canvas {
    slides: Slide[]
    render(): String
}

