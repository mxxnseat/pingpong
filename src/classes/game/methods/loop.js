export default function(){
    this.moveListen();
    this.draw();
    this.start && requestAnimationFrame(() => this.loop());
}