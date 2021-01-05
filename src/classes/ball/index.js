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
    }
    throw() {
        this.throwing = true;
    }
    bounce(platformPosition) {
        if (this.position.x >= GL.w+10 || this.position.x <= 0) return {x:this.position.x, y: this.position.y};
        if (this.position.y >= GL.h-10) this.dir.y *= -1;
        if (this.position.y <= 10) this.dir.y = Math.abs(this.dir.y);

        if (this.position.x <= platformPosition[0].x+10  && this.position.y >= platformPosition[0].y && this.position.y <= platformPosition[0].y + 100) {
            let x = GL.w - 20;
            let y = this.position.y - (platformPosition[0].y + 50);
            let tan = (y / x) * 20;
            x = Math.cos(tan);
            y = Math.sin(tan);

            this.dir = {
                x,
                y
            }
        }
        if (this.position.x >= platformPosition[1].x-10 && this.position.y >= platformPosition[1].y && this.position.y <= platformPosition[1].y + 100) {
            let x = GL.w - 20;
            let y = this.position.y - (platformPosition[1].y + 50);
            let tan = (y / x) * 20;
            x = Math.cos(tan);
            y = Math.sin(tan);

            this.dir = {
                x: -this.dir.x,
                y
            }
        }
    }
    logic(platformPosition) {
        let check = this.bounce(platformPosition);
        const { ctx } = GL;
        ctx.fillStyle = this.color;
        if (this.throwing) {
            this.position.x += this.velocity * this.dir.x;
            this.position.y += this.velocity * this.dir.y;
        }


        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        if(check) return check;
    }
}