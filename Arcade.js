window.addEventListener('load',main,false);

 var bg = new Image();
 bg.src="sky.png";
function main() {
 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext('2d');
 var x = (Math.floor(Math.random(10)*(820-20))+20)//canvas.width/2;
 var y = canvas.height-30;
 var ardx = [-1, -1, 1]
 var dx = ardx[Math.round((Math.random()+1))]*2;
 var dy = -4;
 var R = 10;
 var rightPressed = false;
 var leftPressed = false;
 var click = document.getElementById("newButton");
 var click1 = document.getElementById("newButton1");
 var click2 = document.getElementById("newButton2");
 var click3 = document.getElementById("newButton3");
 var platformH =10;
 var platformW = 350;
 var platformX = (canvas.width-platformW)/2;
 var inter = setInterval(draw,10);
 var row = 8;
 var row2 = 4;
 var column = 14;
 var brickWidth = 75;
 var brickHeight = 20;
 var brickPadding = 15;
 var brickWidth2 = 75;
 var brickHeight2 = 20;
 var brickPadding2 = 40;
 var offsetT = 40;
 var offsetT2 = 70;
 var offsetL = 30;
 var score = 0;
 var bricks = [];
 var bricks2 = [];
 var bricks3 = [];
  




  
	for(var i=0; i<column; i++) {
		bricks[i] = [];
		for(var j=0; j<row; j++) {
			bricks[i][j] = { x: 0, y: 0, status: 1 };
		}
	}	
	/*for(var k=0; k<column; k++) {
		bricks2[k] = [];
		for(var n=0; n<row2; n++) {
			bricks2[k][n] = { x: 0, y: 0, status: 1 };
		}
	}
	for(var k=0; k<column; k++) {
		bricks3[k] = [];
		for(var n=0; n<row2; n++) {
			bricks3[k][n] = { x: 0, y: 0, status: 1 };
		}
	}*/

 
 
 document.addEventListener("keydown", keyDown, false);
 document.addEventListener("keyup", keyUp, false);

 
  
	function keyDown(e) {
		if(e.key == "Right" || e.key == "ArrowRight") {
			rightPressed = true;
		}
		else if(e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = true;
		}
	}



	function keyUp(e) {
		if(e.key == "Right" || e.key == "ArrowRight") {
			rightPressed = false;
		}
		else if(e.key == "Left" || e.key == "ArrowLeft") {
			leftPressed = false;
		}
    	
	}


	function drawBricks() {
		for(var i=0; i<column; i++) {
			for(var j=0; j<row; j++) {
				if (bricks[i][j].status == 1) {
					var brickX = (i*(brickWidth+brickPadding))+offsetL;
					var brickY = (j*(brickHeight+brickPadding))+offsetT;
					bricks[i][j].x = brickX;
					bricks[i][j].y = brickY;
					ctx.beginPath();
					ctx.rect(brickX, brickY, brickWidth, brickHeight);
					ctx.fillStyle = "#FF7F50"
					ctx.fill();
				}
			}
		}
	}
	
	
	/*function drawBricks2() {
		 for(var k=0; k<column; k++) {
			for(var n=0; n<row2; n++) {
				if (bricks2[k][n].status == 1) {
					var brickX2 = (k*(brickWidth2+brickPadding2))+offsetL;
					var brickY2 = (n*(brickHeight2+brickPadding2))+offsetT2;
					bricks2[k][n].x = brickX2;
					bricks2[k][n].y = brickY2;
					ctx.beginPath();
					ctx.rect(brickX2, brickY2, brickWidth2, brickHeight2);
					ctx.fillStyle = "#ff0000"
					ctx.fill();
				}
			}
		}
	}
	function drawBricks3() {
		for(var k=0; k<column; k++) {
			for(var n=0; n<row2; n++) {
				if (bricks2[k][n].status == 0 && bricks3[k][n].status == 1) {
					var brickX2 = (k*(brickWidth2+brickPadding2))+offsetL;
					var brickY2 = (n*(brickHeight2+brickPadding2))+offsetT2;
					bricks3[k][n].x = brickX2;
					bricks3[k][n].y = brickY2;
					ctx.beginPath();
					ctx.rect(brickX2, brickY2, brickWidth2, brickHeight2);
					ctx.fillStyle = "#FF7F50"
					ctx.fill();
				}
			}
		}
	}*/
	
	
	function drawBall() {
	  ctx.beginPath();
	  ctx.arc(x, y, R, 0, 2*Math.PI);
	  ctx.fill();
	  ctx.fillStyle = "#0095DD"
	}
	function drawScore() {
	  ctx.font = "16px Arial";
	  ctx.fillStyle = "#FF7F50";
	  ctx.fillText("Score: "+score, 8, 20);
	}

 
	function drawPlatform() {
		ctx.beginPath();
		ctx.rect(platformX, canvas.height-platformH, platformW, platformH);
		ctx.fillStyle = "#FF7F50"
		ctx.fill();
	}

	click.onclick = function uvel() {
		platformW = 470;
	}
	click1.onclick = function uvel1() {
		platformW = 200;
		
	}
	click2.onclick = function uvel2() {
		dy = -2;	
	}
	click3.onclick = function uvel3() {
		dy = -6;
		dx = ardx[Math.round((Math.random()+1))]*4
	}
 
	function draw() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  ctx.drawImage(bg, 0, 0, 1290, 620);
	  drawBall();
	  drawPlatform();
	  drawBricks();
	  Detection();
	  drawScore();
	 /* drawBricks2();
	  drawBricks3();
	  Detection2();
	  Detection3();*/
	  
	 

		if(x + dx > canvas.width-R || x + dx < R) {
			dx = -dx;
		}
		if(y + dy <R) {
			dy = -dy;
		}
		if(y + dy > canvas.height-R && x > platformX && x < platformX + platformW/3) {
			dy = -dy;
			dx = Math.abs(-dx);
		}
		if(y + dy > canvas.height-R && x > platformX + 2*platformW/3 && x < platformX + platformW) {
			dy = -dy;
			dx = Math.abs(dx);
		}
		else if(y + dy > canvas.height-R) {
			if(x > platformX + platformW/3 && x < platformX + 2*platformW/3) {
				dy = -dy;
			}
			
			else {
				alert("GAME OVER");
				document.location.reload();
				clearInterval(inter); 
			}
		}

		
		if(rightPressed && platformX < canvas.width-platformW) {
			platformX += 7;
		}
		else if(leftPressed && platformX > 0) {
			platformX -= 7;
		
		}
		
		
		x+= dx;
		y+= dy;
  
	}
	/*function Detection2() {
		for (var k = 0; k < column; k++) {
			for (var n = 0; n < row; n++) {
				var b2 = bricks2[k][n];
				if (b2.status == 1) {
					if (x > b2.x && x < b2.x + brickWidth2 && y > b2.y && y < b2.y + brickHeight2) {
						dy = -dy;
						b2.status = 0;
					}
				}
			}
		}
	}		
	function Detection3() {
	  for (var k = 0; k < column; k++) {
			for (var n = 0; n < row; n++) {
				var b3 = bricks3[k][n];
				if (b3.status == 1) {
					if (x > b3.x && x < b3.x + brickWidth2 && y > b3.y && y < b3.y + brickHeight2) {
						dy = -dy;
						bricks3[k][n].status = 0;
						score++;
					   
					}
				}
			}
		}
	}*/
	function Detection() {
		for (var i = 0; i < column; i++) {
			for (var j = 0; j < row; j++) {
				var b = bricks[i][j];
				if (b.status == 1) {
					if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
						dy = -dy;
						b.status = 0;
						score++;
							
						if(score == row*column - 10 ) {
							dy = -4,5;
							dx = ardx[Math.round((Math.random()+1))]*5,5
						}
						if(score == row*column) {
							alert("YOU WIN!");
							document.location.reload();
							clearInterval(inter);
						}
					}
				}	
			}
		}
	}

  

 

}


















