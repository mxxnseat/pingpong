import Platfrom from "../../platform";
import Ball from "../../ball";

export default function(){
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
                    y: this.platform[1].getPosition().y,
                    x: this.platform[1].getPosition().x - 30
                });
            }
            this.draw();
        }
}