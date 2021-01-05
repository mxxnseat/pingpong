export default function(platformPosition){
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