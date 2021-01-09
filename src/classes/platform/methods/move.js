export default function(dir){
    if(this.position.y<0) this.position.y = GL.h-5;
    if(this.position.y>GL.h) this.position.y = 5;
        
        this.position.y += this.velocity*dir;
}