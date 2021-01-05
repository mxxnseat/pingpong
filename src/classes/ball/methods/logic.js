export default function(platformPosition) {
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