"use strict";var myPlane={ele:null,fireInterval:500,init:function(){return this.ele=document.createElement("div"),gameEngine.ele.appendChild(this.ele),this.ele.className="myplane",this.ele.style.left=(gameEngine.ele.offsetWidth-this.ele.offsetWidth)/2+"px",this.ele.style.top=gameEngine.ele.offsetHeight-this.ele.offsetHeight+"px",this},fire:function(){setInterval(function(){new Bullet(document.createElement("div"),parseInt(1e8*Math.random())).init().move()},myPlane.fireInterval)},move:function(){this.ele.onmousedown=function(e){var t=(e=e||event).offsetX,n=e.offsetY;document.onmousemove=function(e){var l=(e=e||event).pageX-t-gameEngine.ele.offsetLeft;l<0?l=0:l>gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth&&(l=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth),myPlane.ele.style.left=l+"px",myPlane.ele.style.top=e.pageY-n+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}}};