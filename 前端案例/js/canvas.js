 function myCanvas(num) {
     this.ele = document.getElementById('canvas');
     this.cxt = this.ele.getContext('2d');
     this.handeleReize();
     this.num = num;
     this.data = [];
     this.isMoved = false;
     this.init();
 };
 myCanvas.prototype = {
     init() {
         this.saveData();
         this.drow();
         this.move();
         document.addEventListener('mousemove', this.handleMouse.bind(this), false);
         window.addEventListener('resize', this.handeleReize.bind(this), false)
     },
     handeleReize() {
         this.ele.width = window.innerWidth;
         this.ele.height = window.innerHeight;
     },
     handleMouse(e) {
         this.isMoved = true;
         var x1 = e.clientX;
         var y1 = e.clientY;
         for (var i = 0; i < this.num; i++) {
             var x2 = this.data[i].x;
             var y2 = this.data[i].y;
             if (Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) <= 130 * 130) {
                 this.line(x1, y1, x2, y2);
             };
         }
     },
     saveData() {
         for (var i = 0; i < this.num; i++) {
             this.data.push({ 
                 x: Math.random() * window.innerWidth,  
                 y: Math.random() * window.innerHeight, 
                 r: Math.random() * 2 + 1,  
                 speedX: Math.random() - 0.5, 
                 speedY: Math.random() - 0.5, 
             });
         };
     },
     circle(x, y, r) {
         this.cxt.beginPath();
         this.cxt.fillStyle = 'pink';
         this.cxt.arc(x, y, r, 0, Math.PI * 2);
         this.cxt.closePath();
         this.cxt.fill();
     },
     line(x1, y1, x2, y2) {
         this.cxt.beginPath();
         var color = this.cxt.createLinearGradient(x1, y1, x2, y2);
         color.addColorStop(0, '#F8C390');
         color.addColorStop(1, this.isMoved ? '#DEB0DF' : 'pink');
         this.cxt.strokeStyle = color;
         this.cxt.lineWidth = 2;
         this.cxt.moveTo(x1, y1);
         this.cxt.lineTo(x2, y2);
         this.cxt.closePath();
         this.cxt.stroke();
     },
     move() {
         setInterval(this.drow.bind(this), 20);
     },
     drow() {
         this.isMoved = false;
         this.cxt.clearRect(0, 0, window.innerWidth, window.innerHeight); 
         for (var i = 0; i < this.num; i++) {
             var x1 = this.data[i].x;
             var y1 = this.data[i].y;
             var r1 = this.data[i].r;
             this.circle(x1, y1, r1);
             for (var j = i + 1; j < this.num; j++) {
                 var x2 = this.data[j].x;
                 var y2 = this.data[j].y;
                 var r2 = this.data[j].r;
                 if (Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) <= 60 * 60) {
                     this.line(x1, y1, x2, y2);
                 };
             };
             this.data[i].x += this.data[i].speedX;
             this.data[i].y += this.data[i].speedY;
             if (this.data[i].x <= 0 || this.data[i].x >= window.innerWidth) {
                 this.data[i].speedX = -this.data[i].speedX;;
             }
             if (this.data[i].y <= 0 || this.data[i].y >= window.innerHeight) {
                 this.data[i].speedY = -this.data[i].speedY;;
             }
         };
     }
 }
 var mycanvas = new myCanvas(200); 