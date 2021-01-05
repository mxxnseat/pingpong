export default function(dir){
    if(this.position.y<0) this.position.y = GL.h;
        if(this.position.y>GL.h) this.position.y = -15;
        
        this.position.y += this.velocity*dir;
}