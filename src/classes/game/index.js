import Platfrom from "../platform";
import Ball from "../ball";

import clear from "./methods/clear";
import draw from "./methods/draw";
import init from "./methods/init";
import loop from "./methods/loop";

export default class Game {
    constructor() {
        this.platform = [
            new Platfrom({ x: 0, y: GL.h / 2 }),
            new Platfrom({ x: GL.w - 10, y: GL.h / 2 })
        ];
        this.ball = new Ball(this.platform[0].getPosition());
        this.start = false;
        this.scoreCounter = {
            left: 0,
            right: 0
        }

        this.clear = clear.bind(this);
        this.draw = draw.bind(this);
        this.init = init.bind(this);
        this.loop = loop.bind(this);
    }
    moveListen() {
        for (let k in this.pressedKey) {
            switch (k) {
                case '87':
                    this.platform[0].move(-1)
                    break;
                case '83':
                    this.platform[0].move(1);
                    break;
                case '38':
                    this.platform[1].move(-1);
                    break;
                case '40':
                    this.platform[1].move(1);
                    break;
            }

        }
    }
}