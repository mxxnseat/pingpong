export default function(){
    this.draw();
    this.start && requestAnimationFrame(() => this.loop());
}