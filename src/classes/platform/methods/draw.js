export default function(){
    const { ctx } = GL;

        ctx.fillStyle = "#fff";
        ctx.fillRect(this.position.x, this.position.y, this.sizes.w, this.sizes.h);
}