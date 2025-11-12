const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ],
  animate : true
};



function drawDiamond(context, pt1, pt2, pt3, pt4, color = 'red', lineWidth = 4) {
    context.beginPath();
    context.moveTo(...pt1);
    context.lineTo(...pt2);
    context.lineTo(...pt3);
    context.lineTo(...pt4);
    
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.closePath();
    context.stroke();

}

function drawLine(context, x1, y1, x2, y2, color="teal", lineWidth=4){
  context.beginPath();
  context.moveTo(x1,y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.stroke();
}

const sketch = () => {
   let x = 240;
   let y = 240;
   let speed = 8;
   let speed1 = 8;
  let radius = 100;
  let radius1 = 190;


    

  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

drawDiamond(context, [760, 1024], [1050, 248], [1340, 1024], [1050, 1800], '#FFD700', 8);
drawDiamond(context, [818, 1024], [1050, 548], [1284, 1024], [1050, 1500], '#FFC700', 8);
drawDiamond(context, [860, 1024], [1050, 698], [1242, 1024], [1050, 1350], '#FFB700', 8);

    context.beginPath();
context.arc(248, 248, 200, 0, Math.PI * 2);
context.fillStyle= '#FF6B9D';
context.fill();

context.beginPath();
context.arc(1800, 248, 200, 0, Math.PI * 2);
context.fillStyle= '#FF6B9D';
context.fill();

 context.fillStyle = '#FF6B9D';
  context.beginPath();
  context.rect(248, 48, 1552, 400);
  context.fill();

  context.beginPath();
context.arc(248, 248, 152, 0, Math.PI * 2);
context.fillStyle= 'black';
context.fill();

context.beginPath();
context.arc(1800, 248, 152, 0, Math.PI * 2);
context.fillStyle= 'black';
context.fill();

 context.fillStyle = 'black';
  context.beginPath();
  context.rect(248, 96, 1552, 304);
  context.fill();

  context.beginPath();
context.arc(248, 248, 104, 0, Math.PI * 2);
context.fillStyle= '#00D9FF';
context.fill();

context.beginPath();
context.arc(1800, 248, 104, 0, Math.PI * 2);
context.fillStyle= '#00D9FF';
context.fill();

 context.fillStyle = '#00D9FF';
  context.beginPath();
  context.rect(248, 144, 1552, 208);
  context.fill();

  context.beginPath();
context.arc(248, 1800, 200, 0, Math.PI * 2);
context.fillStyle= '#FF6B9D';
context.fill();

context.beginPath();
context.arc(1800, 1800, 200, 0, Math.PI * 2);
context.fillStyle= '#FF6B9D';
context.fill();

 context.fillStyle = '#FF6B9D';
  context.beginPath();
  context.rect(248, 1600, 1552, 400);
  context.fill();


  

  context.beginPath();
context.arc(700, 1024, 300, Math.PI * 3/2, Math.PI * 1/2);
context.lineWidth= 14;
context.strokeStyle= '#FF6B9D';
context.stroke();

  context.beginPath();
context.arc(700, 1024, 252, Math.PI * 3/2, Math.PI * 1/2);
context.lineWidth= 12;
context.strokeStyle= '#FF1493';
context.stroke();

  context.beginPath();
context.arc(700, 1024, 204, Math.PI * 3/2, Math.PI * 1/2);
context.lineWidth= 10;
context.strokeStyle= '#FF69B4';
context.stroke();

  context.beginPath();
context.arc(700, 1024, 156, Math.PI * 3/2, Math.PI * 1/2);
context.lineWidth= 8;
context.strokeStyle= '#00D9FF';
context.stroke();

  context.beginPath();
context.arc(700, 1024, 108, Math.PI * 3/2, Math.PI * 1/2);
context.lineWidth= 6;
context.strokeStyle= '#FFD700';
context.stroke();

  context.beginPath();
context.arc(700, 1024, 60, Math.PI * 3/2, Math.PI * 1/2);
context.lineWidth= 4;
context.strokeStyle= '#FFC700';
context.stroke();


drawLine(context, 0, 724, 2048, 724, '#FF6B9D', 14);
drawLine(context, 0, 772, 2048, 772, '#FF1493', 12);
drawLine(context, 0, 820, 2048, 820, '#FF69B4', 10);
drawLine(context, 0, 868, 2048, 868, '#00D9FF', 8);
drawLine(context, 0, 916, 2048, 916, '#FFD700', 6);
drawLine(context, 0, 964, 2048, 964, '#FFC700', 4);

drawLine(context, 0, 1084, 2048, 1084, '#FFC700', 4);
drawLine(context, 0, 1132, 2048, 1132, '#FFD700', 6);
drawLine(context, 0, 1180, 2048, 1180, '#00D9FF', 8);
drawLine(context, 0, 1228, 2048, 1228, '#FF69B4', 10);
drawLine(context, 0, 1276, 2048, 1276, '#FF1493', 12);
drawLine(context, 0, 1324, 2048, 1324, '#FF6B9D', 14);


context.beginPath();
context.arc(1400, 1024, 300, Math.PI * 1/2, Math.PI * 3/2);
context.lineWidth= 14;
context.strokeStyle= '#FF6B9D';
context.stroke();

  context.beginPath();
context.arc(1400, 1024, 252, Math.PI * 1/2, Math.PI * 3/2);
context.lineWidth= 12;
context.strokeStyle= '#FF1493';
context.stroke();

  context.beginPath();
context.arc(1400, 1024, 204, Math.PI * 1/2, Math.PI * 3/2);
context.lineWidth= 10;
context.strokeStyle= '#FF69B4';
context.stroke();

  context.beginPath();
context.arc(1400, 1024, 156, Math.PI * 1/2, Math.PI * 3/2);
context.lineWidth= 8;
context.strokeStyle= '#00D9FF';
context.stroke();

  context.beginPath();
context.arc(1400, 1024, 108, Math.PI * 1/2, Math.PI * 3/2);
context.lineWidth= 6;
context.strokeStyle= '#FFD700';
context.stroke();

  context.beginPath();
context.arc(1400, 1024, 60, Math.PI * 1/2, Math.PI * 3/2);
context.lineWidth= 4;
context.strokeStyle= '#FFC700';
context.stroke();


 // animation
  
    x = x+speed;
if (x+radius > width-180 || x-radius<100){
   speed = -speed;
 }
context.beginPath();
context.arc(x+40, 248, radius, 0, Math.PI * 2);
context.fillStyle= '#1a1a1a';
context.fill();
context.lineWidth= 6;
context.strokeStyle= '#444444'
context.stroke();

    y = y+speed1;
if (y+radius1 > width-90 || y-radius<110){
   speed1 = -speed1;
 }
context.beginPath();
context.arc(y+40, 1800, radius1, 0, Math.PI * 2);
context.fillStyle= 'black';
context.fill();
context.lineWidth= 6;
context.stroke();

context.beginPath();
context.arc(y+40, 1800, radius, 0, Math.PI * 2);
context.fillStyle= '#FFD700';
context.fill();
context.lineWidth= 6;
context.stroke();


  };
};

canvasSketch(sketch, settings);
