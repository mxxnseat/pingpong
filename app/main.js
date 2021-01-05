(()=>{"use strict";const t=document.createElement("canvas"),i=t.getContext("2d");let s=t.width=innerWidth,o=t.height=innerHeight;function h(){const{ctx:t}=GL;t.fillStyle="#fff",t.fillRect(this.position.x,this.position.y,this.sizes.w,this.sizes.h)}function n(t){this.position.y<0&&(this.position.y=GL.h),this.position.y>GL.h&&(this.position.y=-15),this.position.y+=this.velocity*t}function e(){return this.position}window.GL={w:s,h:o,canvas:t,ctx:i};class r{constructor(t){this.sizes={w:10,h:100},this.position={x:t.x,y:t.y-this.sizes.h/2},this.velocity=15,this.draw=h.bind(this),this.move=n.bind(this),this.getPosition=e.bind(this)}}function a(t){if(this.position.x>=GL.w+10||this.position.x<=0)return{x:this.position.x,y:this.position.y};if(this.position.y>=GL.h-10&&(this.dir.y*=-1),this.position.y<=10&&(this.dir.y=Math.abs(this.dir.y)),this.position.x<=t[0].x+10&&this.position.y>=t[0].y&&this.position.y<=t[0].y+100){let i=GL.w-20,s=this.position.y-(t[0].y+50),o=s/i*20;i=Math.cos(o),s=Math.sin(o),this.dir={x:i,y:s}}if(this.position.x>=t[1].x-10&&this.position.y>=t[1].y&&this.position.y<=t[1].y+100){let i=GL.w-20,s=this.position.y-(t[1].y+50),o=s/i*20;i=Math.cos(o),s=Math.sin(o),this.dir={x:-this.dir.x,y:s}}}function l(){this.throwing=!0}function c(t){let i=this.bounce(t);const{ctx:s}=GL;if(s.fillStyle=this.color,this.throwing&&(this.position.x+=this.velocity*this.dir.x,this.position.y+=this.velocity*this.dir.y),s.beginPath(),s.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI),s.fill(),i)return i}class y{constructor(t){this.radius=10,this.position={x:Math.abs(2*this.radius+t.x),y:t.y+50},this.velocity=10,this.dir={x:this.position.x<=10?1:-1,y:0},this.color="#000033",this.throwing=!1,this.bounce=a.bind(this),this.throw=l.bind(this),this.logic=c.bind(this)}}function p(){GL.ctx.fillStyle="#CCCCFF",GL.ctx.fillRect(0,0,GL.w,GL.h)}function d(){this.clear(),this.platform.map((t=>{t.draw()}));let t=this.ball.logic([this.platform[0].getPosition(),this.platform[1].getPosition()]);t&&(this.ball=null,this.start=!1,this.platform=[new r({x:0,y:GL.h/2}),new r({x:GL.w-10,y:GL.h/2})],t.x<=0?(document.querySelector("#left").innerText=++this.scoreCounter.left,this.ball=new y(this.platform[0].getPosition())):(document.querySelector("#right").innerText=++this.scoreCounter.right,this.ball=new y({y:this.platform[1].getPosition().y,x:this.platform[1].getPosition().x-30})),this.draw())}function f(){document.querySelector("body").prepend(GL.canvas),window.addEventListener("keydown",(t=>{switch(t.keyCode){case 32:this.start||(this.start=!0,this.ball.throw(),this.loop());break;case 87:this.start&&this.platform[0].move(-1);break;case 83:this.start&&this.platform[0].move(1);break;case 38:this.start&&this.platform[1].move(-1);break;case 40:this.start&&this.platform[1].move(1)}})),this.loop()}function x(){this.draw(),this.start&&requestAnimationFrame((()=>this.loop()))}(new class{constructor(){this.platform=[new r({x:0,y:GL.h/2}),new r({x:GL.w-10,y:GL.h/2})],this.ball=new y(this.platform[0].getPosition()),this.start=!1,this.scoreCounter={left:0,right:0},this.clear=p.bind(this),this.draw=d.bind(this),this.init=f.bind(this),this.loop=x.bind(this)}}).init()})();