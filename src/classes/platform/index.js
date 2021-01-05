import draw from "./methods/draw";
import move from "./methods/move";
import getPosition from "./methods/getPosition";

export default class Platfrom {
    constructor(position) {
        this.sizes = {
            w: 10,
            h: 100
        }
        this.position = {
            x: position.x,
            y: position.y - (this.sizes.h / 2)
        };
        this.velocity = 15;

        this.draw = draw.bind(this);
        this.move = move.bind(this);
        this.getPosition = getPosition.bind(this);
    }
}