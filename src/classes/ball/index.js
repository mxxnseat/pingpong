import bounce from "./methods/bounce";
import Throw from "./methods/throw";
import logic from "./methods/logic";

export default class Ball {
    constructor(position) {
        this.radius = 10;
        this.position = {
            x:  Math.abs((this.radius * 2) + position.x),
            y: position.y + 50
        };
        this.velocity = 10;
        this.dir = {
            x: this.position.x<=10 ? 1 : -1,
            y: 0
        }
        this.color = "#000033";

        this.throwing = false;

        this.bounce = bounce.bind(this);
        this.throw = Throw.bind(this);
        this.logic = logic.bind(this);
    }
    
}