
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
    }
    move(dir) {
        if(this.position.y<0) this.position.y = GL.h;
        if(this.position.y>GL.h) this.position.y = -15;
        
        this.position.y += this.velocity*dir;
        
    }
    draw() {
        const { ctx } = GL;

        ctx.fillStyle = "#fff";
        ctx.fillRect(this.position.x, this.position.y, this.sizes.w, this.sizes.h);
    }
    getPosition() {
        return this.position;
    }
}