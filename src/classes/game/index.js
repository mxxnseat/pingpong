import Platfrom from "../platform";
import Ball from "../ball";

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

        this.init();
    }

    clear() {
        GL.ctx.fillStyle = "#CCCCFF";
        GL.ctx.fillRect(0, 0, GL.w, GL.h);
    }
    draw() {
        this.clear();
        this.platform.map(i => {
            i.draw();
        });
        let check = this.ball.logic([
            this.platform[0].getPosition(),
            this.platform[1].getPosition()
        ]
        );
        if (check) {
            this.ball = null;
            this.start = false;
            this.platform = [
                new Platfrom({ x: 0, y: GL.h / 2 }),
                new Platfrom({ x: GL.w - 10, y: GL.h / 2 })
            ];
            if (check.x <= 0) {
                document.querySelector("#left").innerText = ++this.scoreCounter.left;
                this.ball = new Ball(this.platform[0].getPosition());
            } else {
                document.querySelector("#right").innerText = ++this.scoreCounter.right;
                this.ball = new Ball({
                    y:this.platform[1].getPosition().y,
                    x:this.platform[1].getPosition().x-30
                });
            }
            this.draw();
        }
    }
    init() {
        document.querySelector("body").prepend(GL.canvas);
        window.addEventListener("mousemove", (e) => {
            
        })
        window.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 32:
                    if (!this.start) {
                        this.start = true;
                        this.ball.throw();
                        this.loop(); 
                    }
                break;
                case 87:
                    if (this.start) {
                        this.platform[0].move(-1);
                    }
                break;
                case 83:
                    if (this.start) {
                        this.platform[0].move(1);
                    }
                break;
                case 38:
                    if (this.start) {
                        this.platform[1].move(-1);
                    }
                break;
                case 40:
                    if (this.start) {
                        this.platform[1].move(1);
                    }
                break;
            }
        })
        this.loop();
    }
    loop() {
        this.draw();
        this.start && requestAnimationFrame(() => this.loop());
    }
}