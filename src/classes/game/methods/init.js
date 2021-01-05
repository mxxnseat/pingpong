export default function(){
    document.querySelector("body").prepend(GL.canvas);
        window.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 32:
                    if (!this.start) {
                        this.start = true;
                        this.ball.throw();
                        this.loop();
                    }
                    break;
                case 87:
                    if (this.start) {
                        this.platform[0].move(-1);
                    }
                    break;
                case 83:
                    if (this.start) {
                        this.platform[0].move(1);
                    }
                    break;
                case 38:
                    if (this.start) {
                        this.platform[1].move(-1);
                    }
                    break;
                case 40:
                    if (this.start) {
                        this.platform[1].move(1);
                    }
                    break;
            }
        })
        this.loop();
}