var F = false

var srcX;
var srcY;

var srcX1;
var srcY1;

var sheetWidth = 64;
var sheetHeight = 16;

var sheetWidth1 = 32;
var sheetHeight1 = 16;

var cols = 4;
var rows = 1;

var cols1 = 2;
var rows1 = 1;

var width = sheetWidth / cols;
var height = sheetHeight / rows;

var width1 = sheetWidth1 / cols1;
var height1 = sheetHeight1 / rows1;

var currentFrame = 0;

var currentFrame1 = 0;

var down = false;
var up = false;
var left = false;
var right = false;

var heroX = Math.floor(Math.random() *536) +1;
var heroY = Math.floor(Math.random() *536) +1;

var chestX = Math.floor(Math.random() *568) +1;
var chestY = Math.floor(Math.random() *568) +1;

var mX = Math.floor(Math.random() *500) +1;
var mY = Math.floor(Math.random() *500) +1;

var buffX = Math.floor(Math.random() *536) +1;
var	buffY = Math.floor(Math.random() *536) +1;
var buffO = true;
var ok = true;

var darkX = 114;
var darkY = -50;

var cOn = false;

var stairs = false;

var tPositionX = [0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,480,512,544,576,608,640]
var tPositionY = [0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,480,512,544,576,608,640]

var key = false;
var end = false;

var mX1 = [mX,120,30,mX+mY,300,500];
var mY1 = [mY,176,500,mY+mX,300,32];

var mY2 = [300,32,500,50,40,600,70,8,20,55];
var mX2 = [300,500,32,20,60,300,200,70,80,90];

var mSY1 = [mY,176,500,mY+mX,300,32];
var mSX1 = [mX,120,30,mX+mY,300,500];

var mSY2 = [300,32,500,50,40,600,70,8,20,55];
var mSX2 = [300,500,32,20,60,300,200,70,80,90];

var speedMX = [1,2,3,4,1,2,3,4,1,2];
var speedMY = [0.5,1,1.5,2,2.5,3,0.5,1,1.5]
var count1 = Math.floor(Math.random() *10) +1;

var health = 100;
var hunger = 100;

var move = 600;
var t = true;

var scoreG = 0;
var scoreE = 0;

var reload = false;
var timer = 0;

var heroS = new Image();
heroS.src = "assets/hero.png";

var s = new Image();
s.src = "assets/stairs.png";

var tile = new Image();
tile.src = "assets/tile.png";

var chest = new Image();
chest.src = "assets/chest.png";

var monster = new Image();
monster.src = "assets/Undead.png";

var slimer = new Image();
slimer.src = "assets/slimer.png";

var buff = new Image();
buff.src = "assets/animal.png";

var grass = new Image();
grass.src = "assets/grass.png";

map1=new Image();
map1.src = "assets/map.png";





function drawT() 
	{
		
		if(stairs == false)
			{
			
			for (var i = 0; i < 20; i++) 
				{
					for (var e = 0; e < 20; e++) 
						{
						canvasContext.drawImage(grass,tPositionX[i], tPositionY[e],32,32)
						}
				}
				canvasContext.drawImage(map1,0,0,canvas.width,canvas.height)
				canvasContext.strokeStyle = 'gray';
				canvasContext.lineWidth = 32;
				canvasContext.strokeRect(-16,16,canvas.width,canvas.height-32)
				timer = 0;
			}
			
		if(stairs)
			{
				for (var i = 0; i < 20; i++) 
					{
					for (var e = 0; e < 20; e++) 
						{
						canvasContext.drawImage(tile, tPositionX[i], tPositionY[e], 32, 32);
						} 
					}
				if(timer > 200)
					{	
				canvasContext.drawImage(chest,chestX,chestY,32,32)
					}
					canvasContext.strokeStyle = 'gray';
					canvasContext.lineWidth = 32;
					canvasContext.strokeRect(16,16,canvas.width-32,canvas.height-32)
					
					canvasContext.drawImage(s,352,254,32,32)
					canvasContext.strokeStyle = "black";
					canvasContext.globalAlpha = 0.8;
					canvasContext.lineWidth=500;
					canvasContext.strokeRect(darkX,darkY,canvas.width,canvas.height);
					canvasContext.lineWidth=500;
					canvasContext.strokeRect(60,-40,canvas.width,canvas.height);
					canvasContext.globalAlpha = 1;
					
				if(timer > 200)
					{	
				canvasContext.strokeStyle = 'white';
				canvasContext.lineWidth = 2;
				canvasContext.strokeRect(chestX,chestY,32,32)
					}
					
					
				if(down && cOn && heroY < 539)
					{
						darkY += 10
						scoreG ++;	
					}
				
				if(up && cOn && heroY > 33)
					{
						darkY -= 10
						scoreG ++;	
					}
					
				if(left && cOn && heroX > 33)
					{
						darkX -= 10	
						scoreG ++;	
					}
					
				if(right && cOn && heroX < 538)
					{
						darkX += 10	
						scoreG ++;	
					}
					
				if(heroX >= chestX && heroX+20 <= chestX+32 && heroY >= chestY && heroY+20 <= chestY+32 && cOn == true && timer > 200)
					{
						alert("You found a map to home, and folow it!");
						scoreG += 100;
						stairs = !stairs;
						cOn = !cOn;
						heroY = 400;
						heroX = canvas.width/2;
						key = true;
						end = !end;
					}
				
			}
//			canvasContext.fillRect(352,254,32,32);
//			canvasContext.strokeStyle = 'red';
//			canvasContext.lineWidth = 1; 
//			canvasContext.strokeRect(heroX,heroY,32,32)
			
		if(heroX <= 384 && heroX >= 352 && heroY+20 <= 284 && heroY >= 252)
			{
				cOn = !cOn;
				scoreG ++;	
				stairs = !stairs;
				if(stairs)
					{
					heroX = 400;
					}
				if(stairs == false)
					{
					heroX = 332;
					}
			}
	}


	
function updateFrame()
	{
		currentFrame = ++currentFrame % cols;
		
		srcX = currentFrame * width;
		srcY = 0;
		
		currentFrame1 = ++currentFrame1 % cols1;
		
		srcX1 = currentFrame1 * width1;
		srcY1 = 0;
	}
	
function hero()
	{
		
		if(down)
			{
				heroY += 10;
				hunger -= 0.1;	
			}
		
		if(up)
			{
				heroY -= 10
				hunger -= 0.1;	
			}
			
		if(left)
			{
				heroX -= 10
				hunger -= 0.1;	
			}
			
		if(right)
			{
				heroX += 10
				hunger -= 0.1;	
			}
			
		if(heroY > canvas.height-60)
			{
				scoreG --;
				heroY = canvas.height-60;
				health -= 1;	
			}
			
		if(heroY < 32)
			{
				scoreG --;
				heroY = 33;
				health -= 1;	
			}
			
		if(heroX > canvas.width-60 && end == false)
			{
				scoreG --;
				heroX = canvas.width-61;
				health -= 1;	
			}
			
		if(heroX < 0 && cOn == false)
			{
				alert("The current is too strong to swim any further!")
				scoreG --;
				left = false;
				right = false;
				up = false;
				down = false;
				heroX = 1;
				health -= 1;		
			}
			
		if(heroX < 32 && cOn)
			{
				heroX = 32;
			}
			
		updateFrame();
		canvasContext.drawImage(heroS,srcX,srcY,width,height,
		heroX,heroY,32,32)
		
	
		
		if(cOn == false)
			{
				darkY = -50;
				darkX = 114;
				count1 = Math.floor(Math.random() *10) +1;
				
				for (var i = 0; i < count1; i++) {
					
					mY1[i] = mSY1[i];
					mX1[i] = mSX1[i];
					
					mX2[i] = mSX2[i];
					mY2[i] = mSY2[i];
				}
			
			if(buffO || ok)
				{
				canvasContext.drawImage(buff,srcX1,srcY1,width1,height1,
				buffX,buffY,32,32)
				}
				
			if(heroY > buffY-64 && heroY < buffY+64 && heroX > buffX-64 && heroX < buffX+64 && buffO == false && hunger < 100)
				{
					alert("You killed the Buffalo and gained 10 hunger!")
					hunger += 10;
					scoreG +=10;
					key = false;
					left = false;
					right = false;
					up = false;
					down = false;
					buffX = Math.floor(Math.random() *536) +1;
					buffY = Math.floor(Math.random() *536) +1;
					buffO = true;
				}
				
			if(hunger > 100)
				{
					hunger --;
				}
				 
			} 
			
		if(reload)        
		    {
		    	location.reload();	
		    }
			
		if(key && stairs == false)
		{
			alert("YOU WIN, CONGRATULATIONS!")
			key = false;
			left = false;
			right = true;
			up = false;
			down = false;
			health = 100;
			hunger = 100;
		}
		
				canvasContext.fillStyle = 'lime'
			if(health <= 50 && health > 25 )
				{
					canvasContext.fillStyle = 'yellow'	
				}
				
			if(health <= 25)
				{
					canvasContext.fillStyle = 'red'	
				}
				canvasContext.fillRect(25,25,health,10)
				canvasContext.lineWidth = 3;
				canvasContext.strokeStyle = 'lightgray'
				canvasContext.strokeRect(25,25,100,10)
				canvasContext.fillStyle = 'lightgray'
				canvasContext.font = "italic 10pt new times roman"
				canvasContext.fillText("HP = " + Math.floor(health),50,20)
				
				if(hunger > 75 && health < 100)
					{
						health += 0.5;
						hunger -= 0.5;
					}
					
				if(hunger < 1 && health > 1)
					{
						health -= 0.5;
						hunger = 0.9;
					}
					
				if(hunger < 0)
					{
						hunger = 0;
					}
					
				if(t == false)
					{
						hunger -= 0.01;
					}
					
					canvasContext.fillStyle = '#5B3E00'
					canvasContext.fillRect(25,55,hunger,10)
					canvasContext.lineWidth = 3;
					canvasContext.strokeStyle = 'lightgray'
					canvasContext.strokeRect(25,55,100,10)
					canvasContext.fillStyle = 'lightgray'
					canvasContext.font = "italic 10pt new times roman"
					canvasContext.fillText("Hunger",55,50)
					
					canvasContext.fillText("Score = "+scoreG,50,80)
					
		if(end)
			{
			scoreE = scoreG;
			canvasContext.fillStyle = 'black'
			canvasContext.fillRect(move,0,canvas.width*2,canvas.height*2)
			canvasContext.fillStyle = 'orange';
			canvasContext.font = "italic 60pt new times roman"
			canvasContext.fillText('GAME OVER', move+100,canvas.height/2)
			canvasContext.font = "italic 30pt new times roman"
			canvasContext.fillText('Score = ' + scoreE, move+250,canvas.height/2+100)
			move -= 5;
			}
			
		if(move < -20)
			{
				end = false;
				location.reload();
			}
		
		if(cOn)
			{			
				for (var i = 0; i < count1; i++)
					{		
						canvasContext.drawImage(slimer,srcX1,srcY1,width1,height1,
						mX2[i],mY2[i],32,32)
				
						canvasContext.drawImage(monster,srcX1,srcY1,width1,height1,
						mX1[i],mY1[i],32,32)	
					}
					
						timer += 1;
			}
			
		if(t)
			{
				canvasContext.fillStyle = 'green';
				canvasContext.fillRect(0,0,canvas.width,canvas.height)
				canvasContext.drawImage(map1,0,0,canvas.width,canvas.height)
				canvasContext.lineWidth = 32;
				canvasContext.strokeRect(-16,16,canvas.width,canvas.height-32)
				canvasContext.strokeStyle = "gray";
				canvasContext.fillStyle = 'black';
				canvasContext.globalAlpha = 0.7;
				canvasContext.fillRect(0,0,canvas.width,canvas.height)
				canvasContext.fillRect(canvas.width/2-200,26,422,98)
				canvasContext.fillRect(canvas.width/2-105,175,242,29)
				canvasContext.fillRect(canvas.width/2-131,465,292,37)
				canvasContext.fillRect(64,230,493,87)
				canvasContext.fillRect(64,330,493,87)
				canvasContext.globalAlpha = 1;
				canvasContext.font = "italic 80pt new times roman"
				canvasContext.fillStyle = 'gray';
				canvasContext.fillText('Castaway', canvas.width/2-200,100)
				canvasContext.lineWidth = 2;
				canvasContext.strokeRect(canvas.width/2-200,26,422,98)
				canvasContext.strokeRect(canvas.width/2-105,174,242,30)
				canvasContext.strokeRect(canvas.width/2-131,463,292,37)
				canvasContext.font = "italic 25pt new times roman"
				canvasContext.fillText('Press "S" to start', canvas.width/2-100,200)
				canvasContext.fillText('Coded by: The Coder', canvas.width/2-130,490)
				canvasContext.font = "italic 15pt new times roman"
				canvasContext.strokeRect(62,230,495,87)				
				canvasContext.fillText('One night you wake up on an Island, completly disoriantated',65,250)
				canvasContext.fillText('eventually you realise that you are trapped',65,270)
				canvasContext.fillText('and need to find a key to escape.',65,290)
				canvasContext.fillText('You then realise that you are not alone...',65,310)
				canvasContext.strokeRect(62,330,495,87)	
				canvasContext.fillText('Press the arrow keys to move around',65,350)
				canvasContext.fillText('Press "X" to atack animals',65,370)
				canvasContext.fillText('Press "S" again to go to the menu',65,390)
				canvasContext.fillText('Press "R" to reload the game',65,410)
								
			}	
	}
	
function collision()
	{
			if(health <= 0)
				{
					alert('You lost =(');
					stairs = !stairs;
					heroY = 100;
					heroX = 100;
					cOn = !cOn;
					end = true;
					health = 100;
					hunger = 100;
					scoreG = 0;
				} 
			
			if(cOn)
			{
			
			for (var i = 0; i < count1; i++)
			{
				
				mX2[i]-=speedMX[i]
				mY2[i]+=speedMY[i]
				
				if(mX2[i] < 0 || mX2[i] > canvas.width-32)
					{
						speedMX[i] = -speedMX[i];
					}
					
				if(mY2[i] < 0 || mY2[i] > canvas.height-32)
					{
						speedMY[i] = -speedMY[i];
					}	
			}

					
			for (var i = 0; i < count1; i++) 
				{	
					if(heroY < mY1[i])
						{
							mY1[i] -= 1;
						}
				
					if(heroY > mY1[i])
						{
							mY1[i] += 1;
						}
				}
			
			for (var i = 0; i < count1; i++) 
				{
					if(heroX > mX1[i])
						{
							mX1[i] += 1;
						}
				
					if(heroX < mX1[i])
						{
							mX1[i] -= 1;
						}
				}
				
			for (var i = 0; i < count1; i++) 
				{
					if(mY1[i] >= heroY && mY1[i] <= heroY+1 && mX1[i] >= heroX && mX1[i] <= heroX+32)
						{
							health --;
							scoreG --;
						}
						
					if(mY2[i] >= heroY && mY2[i] <= heroY+1 && mX2[i] >= heroX && mX2[i] <= heroX+32)
						{
							health -= 20;
							scoreG --;
						}
				}
			}
	}
	
document.onkeydown = function(event)
	{
	       if(event.keyCode === 40)        
	              down = true;
	              
	       if(event.keyCode === 38)        
	              up = true;
	              
	      if(event.keyCode === 39)        
	             right = true;
	             
	      if(event.keyCode === 37)        
	             left = true; 
	      
	      if(event.keyCode === 	83)        
	             t = !t; 
	             
	      if(event.keyCode === 88)        
	             buffO = false;
	             
	     if(event.keyCode === 82)        
	            reload = true;

	}
	
document.onkeyup = function(event)
	{
	       if(event.keyCode === 40)        
	              down = false;
	              
	       if(event.keyCode === 38)        
	              up = false;
	              
	       if(event.keyCode === 39)        
	              right = false;
	              
	       if(event.keyCode === 37)        
	              left = false;
	              
	       if(event.keyCode === 88)        
	              buffO = true;
	              
	      if(event.keyCode === 82)        
	             reload = false;

	}
