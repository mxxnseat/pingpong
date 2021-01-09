export default function () {
    this.pressedKey = {};
    document.querySelector("body").prepend(GL.canvas);
    window.addEventListener("keydown", (e) => {
        switch(e.keyCode){
            case 87:
                this.pressedKey[e.keyCode] = true;
            break;
            case 83:
                this.pressedKey[e.keyCode] = true;
            break;
            case 38:
                this.pressedKey[e.keyCode] = true;
            break;
            case 40:
                this.pressedKey[e.keyCode] = true;
            break;
            case 32:
                this.start = true;
                this.ball.throw();
                this.loop();
            break;
        }
    });
    window.addEventListener("keyup",(e)=>{
        if(e.keyCode == 87 || e.keyCode == 83 || e.keyCode == 38 || e.keyCode == 40) delete this.pressedKey[e.keyCode];
    });
    this.loop();
}