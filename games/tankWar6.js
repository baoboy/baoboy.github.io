//������̹����
var enemyTankCount=10;
//���ͬʱ������
var maxEnemyTank=3;
//Ӣ����������
var heroLife=3;
//Ӣ��̹����ɫ
var heroColor=new Array("#BA9658", "#FEF26E");
//����̹����ɫ
var enemyColor=new Array("#00A2B5", "#00FEFE");

//�����Tank����
function Tank(x, y, direct, color){
	//���еĳ�Ա����
	this.x=x;
	this.y=y;
	this.direct=direct;
	this.color=color;
	this.speed=1;
	this.isLive=true;
	this.blood=2;
	
	//��Ѫ�ķ�����������
	this.cutBlood=function(bullet){
		this.blood-=bullet.power;
		bullet.isLive=false;
		//�ж�̹���Ƿ�ҵ�
		if(this.blood<=0){
			this.die();
		}
	}
	
	//̹������
	this.die=null;
	
	//�ƶ��ķ���
	this.moveUp=function(){
		this.direct=0;
		if(this.y-15>0 && this.checkWall()){
			this.y-=this.speed;
		}
	};
	this.moveRight=function(){
		this.direct=1;
		if(this.x+15<500 && this.checkWall()){
			this.x+=this.speed;
		}
	};
	this.moveDown=function(){
		this.direct=2;
		if(this.y+15<400 && this.checkWall()){
			this.y+=this.speed;
		}
	};
	this.moveLeft=function(){
		this.direct=3;
		if(this.x-15>0 && this.checkWall()){
			this.x-=this.speed;
		}
	};
	
	//�����ǽ����ײ
	this.checkWall=function(){
		switch(this.direct){
			case 0:
				for(var i=0;i<walls.length;i++){
					if(walls[i].isLive && (this.y-15-1) <= (walls[i].y+20) && (this.y-15-1) >= walls[i].y
						&& (this.x+10) >= walls[i].x && (this.x-10) <= (walls[i].x+20)){
						return false;
					}
				}
				break;
			case 2:
				for(var i=0;i<walls.length;i++){
					if(walls[i].isLive && (this.y+15+1) >= (walls[i].y) && (this.y+15+1) <= (walls[i].y+20)
						&& (this.x+10) >= walls[i].x && (this.x-10) <= (walls[i].x+20)){
						return false;
					}
				}
				break;
			case 1:
				for(var i=0;i<walls.length;i++){
					if(walls[i].isLive && (this.x+15+1) >= (walls[i].x) && (this.x+15+1) <= (walls[i].x+20)
						&& (this.y+10) >= walls[i].y && (this.y-10) <= (walls[i].y+20)){
						return false;
					}
				}
				break;
			case 3:
				for(var i=0;i<walls.length;i++){
					if(walls[i].isLive && (this.x-15-1) <= (walls[i].x+20) && (this.x-15-1) >= walls[i].x
						&& (this.y+10) >= walls[i].y && (this.y-10) <= (walls[i].y+20)){
						return false;
					}
				}
				break;
		}
		return true;
	}
	
	//�滭����
	this.draw=function(){
		if(!this.isLive)return;
		switch(this.direct){
			//���·���
			case 0:
			case 2:
				cxt.fillStyle=this.color[0];
				cxt.fillRect(this.x-10, this.y-15, 5, 30);
				cxt.fillRect(this.x+5, this.y-15, 5, 30);
				cxt.fillRect(this.x-4, this.y-10, 8, 20);
				cxt.beginPath();
				cxt.arc(this.x, this.y, 4, 0, 360, true);
				cxt.closePath();
				cxt.fillStyle=this.color[1];
				cxt.fill();
				cxt.beginPath();
				cxt.moveTo(this.x, this.y);
				if(this.direct==0){
					cxt.lineTo(this.x, this.y-15);
				}else{
					cxt.lineTo(this.x, this.y+15);
				}
				cxt.closePath();
				cxt.strokeStyle=this.color[1];
				cxt.lineWidth=2;
				cxt.stroke();
				break;
			//���ҷ���
			case 1:
			case 3:
				cxt.fillStyle=this.color[0];
				cxt.fillRect(this.x-15, this.y-10, 30, 5);
				cxt.fillRect(this.x-15, this.y+5, 30, 5);
				cxt.fillRect(this.x-10, this.y-4, 20, 8);
				cxt.beginPath();
				cxt.arc(this.x, this.y, 4, 0, 360, true);
				cxt.closePath();
				cxt.fillStyle=this.color[1];
				cxt.fill();
				cxt.beginPath();
				cxt.moveTo(this.x, this.y);
				if(this.direct==1){
					cxt.lineTo(this.x+15, this.y);
				}else{
					cxt.lineTo(this.x-15, this.y);
				}
				cxt.closePath();
				cxt.strokeStyle=this.color[1];
				cxt.lineWidth=2;
				cxt.stroke();
				break;	
		}
	}
	
}

//Ӣ��̹����
function Hero(x, y, direct, color){
	//����ð�䣨�̳У�
	this.tank=Tank;
	this.tank(x, y, direct, color);
	this.speed=1;
	
	this.die=function(){
		this.isLive=false;
		bombs.push(new Bomb(this.x-10, this.y-15));
		createHero();
	}
	
	//�����ӵ�
	this.shot=function(){
		switch(this.direct){
			case 0:
				heroBullets.push(new HeroBullet(this.x-1, this.y-15, this.direct, this.color[1]));
				break;
			case 1:
				heroBullets.push(new HeroBullet(this.x+15, this.y-1, this.direct, this.color[1]));
				break;
			case 2:
				heroBullets.push(new HeroBullet(this.x-1, this.y+15, this.direct, this.color[1]));
				break;
			case 3:
				heroBullets.push(new HeroBullet(this.x-15, this.y-1, this.direct, this.color[1]));
				break;
			default:
				return;
		}
		heroBullets[heroBullets.length-1].timer=window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()", 50);
	}
}

//����̹����
function EnemyTank(x, y, direct, color){
	this.tank=Tank;
	this.tank(x, y, direct, color);
	this.num=0;
	this.count=0;
	this.timer=null;
	this.bullet=null;
	
	this.die=function(){
		this.isLive=false;
		window.clearInterval(this.timer);
		createEnemyTank();
		bombs.push(new Bomb(this.x-15, this.y-10));
	}
	
	//��������ͷ����ƶ�
	this.run=function(){
		if(this.num>=this.count){
			this.direct=Math.round(Math.random()*3);
			this.count=(Math.random()*3+2)*10;
			this.num=0;
		}
		this.num++;
		switch(this.direct){
			case 0:
				this.moveUp();
				break;
			case 1:
				this.moveRight();
				break;
			case 2:
				this.moveDown();
				break;
			case 3:
				this.moveLeft();
				break;
		}
		
		this.shot();
	}
	
	//�����ӵ�
	this.shot=function(){
		if(this.bullet!=null && this.bullet.isLive)return;
		switch(this.direct){
			case 0:
				this.bullet=new EnemyBullet(this.x-1, this.y-15, this.direct, this.color[1]);
				break;
			case 1:
				this.bullet=new EnemyBullet(this.x+15, this.y-1, this.direct, this.color[1]);
				break;
			case 2:
				this.bullet=new EnemyBullet(this.x-1, this.y+15, this.direct, this.color[1]);
				break;
			case 3:
				this.bullet=new EnemyBullet(this.x-15, this.y-1, this.direct, this.color[1]);
				break;
			default:
				return;
		}
		enemyBullets.push(this.bullet);
		this.bullet.timer=window.setInterval("enemyBullets["+(enemyBullets.length-1)+"].run()", 50);
	}
}

//---------------------------------------�����ķָ���--------------------------------------------

//�ӵ�����
function Bullet(x, y, direct, color){
	this.x=x;
	this.y=y;
	this.direct=direct;
	this.color=color;
	this.speed=5;
	this.timer=null;
	this.isLive=true;
	this.power=1;
	
	this.run=function(){
		if(this.x<0 || this.x>500 || this.y<0 || this.y>400 || !this.isLive){
			this.isLive=false;
			window.clearInterval(this.timer);
			return;
		}
		switch(this.direct){
			case 0:
				this.y-=this.speed;
				break;
			case 1:
				this.x+=this.speed;
				break;
			case 2:
				this.y+=this.speed;
				break;
			case 3:
				this.x-=this.speed;
				break;
		}
		//document.getElementById("index").innerHTML=this.x+","+this.y;
	}
	
	this.draw=function(){
		if(this.isLive){
			cxt.fillStyle=this.color;
			cxt.fillRect(this.x, this.y, 2, 2);
			this.check();
			this.checkWall();
		}
	}
	
	//�����ǽ����ײ
	this.checkWall=function(){
		for(var i=0;i<walls.length;i++){
			if(walls[i].isLive && this.x>=walls[i].x && this.x<=walls[i].x+20 && this.y>=walls[i].y && this.y<=walls[i].y+20){
				walls[i].cutBlood(this);
				return;
			}
		}
	}
	
	//�����ײ
	this.check=null;
}

//Ӣ���ӵ���
function HeroBullet(x, y, direct, color){
	this.bullet=Bullet;
	this.bullet(x, y, direct, color);
	
	//����ӵ��Ƿ��������ײ
	this.check=function(){
		for(var i=0;i<enemyTanks.length;i++){
			if(enemyTanks[i].isLive){
				if(enemyTanks[i].direct==0 || enemyTanks[i].direct==2){
					if(this.x>=enemyTanks[i].x-10 && this.x<=enemyTanks[i].x+10 && this.y>=enemyTanks[i].y-15 && this.y<=enemyTanks[i].y+15){
						enemyTanks[i].cutBlood(this);
						return;
					}
				}else{
					if(this.x>=enemyTanks[i].x-15 && this.x<=enemyTanks[i].x+15 && this.y>=enemyTanks[i].y-10 && this.y<=enemyTanks[i].y+15){
						enemyTanks[i].cutBlood(this);
						return;
					}
				}
			}
		}
	}
}

//�����ӵ���
function EnemyBullet(x, y, direct, color){
	this.bullet=Bullet;
	this.bullet(x, y, direct, color);
	
	//����ӵ��Ƿ���Ӣ����ײ
	this.check=function(){
		if(hero.isLive){
			if(hero.direct==0 || hero.direct==2){
				if(this.x>=hero.x-10 && this.x<=hero.x+10 && this.y>=hero.y-15 && this.y<=hero.y+15){
					hero.cutBlood(this);
					return;
				}
			}else{
				if(this.x>=hero.x-15 && this.x<=hero.x+15 && this.y>=hero.y-10 && this.y<=hero.y+15){
					hero.cutBlood(this);
					return;
				}
			}

		}
	}
}

//---------------------------------------�����ķָ���--------------------------------------------

//ը����-̹���е��ı�ըЧ��
function Bomb(x, y){
	this.x=x;
	this.y=y;
	this.isLive=true;
	this.blood=9;
	
	this.draw=function(){
		if(this.isLive){
			if(this.blood>6){
				var img1=new Image();
				img1.src="bomb_1.gif";
				var x=this.x;
				var y=this.y;
				img1.onload=function(){
					cxt.drawImage(img1,	x, y, 30, 30);
				}
			}else if(this.blood>3){
				var img2=new Image();
				img2.src="bomb_2.gif";
				var x=this.x;
				var y=this.y;
				img2.onload=function(){
					cxt.drawImage(img2,	x, y, 30, 30);
				}
			}else{
				var img3=new Image();
				img3.src="bomb_3.gif";
				var x=this.x;
				var y=this.y;
				img3.onload=function(){
					cxt.drawImage(img3,	x, y, 30, 30);
				}
			}
			
			this.blood--;
			if(this.blood<=0){
				this.isLive=false;
			}
		}
	}
}

//---------------------------------------�����ķָ���--------------------------------------------

//ǽ ��
function Wall(x, y, color, blood, rigidity){
	this.x=x;
	this.y=y;
	this.color=color;
	this.blood=blood;
	//Ӳ��
	this.rigidity=rigidity;
	this.isLive=true;
	
	//��Ѫ����
	this.cutBlood=function(bullet){
		bullet.isLive=false;
		if(this.rigidity>bullet.power)return;
		this.blood-=(bullet.power-this.rigidity+1);
		if(this.blood<=0){
			this.die();
		}
	}
	//��������
	this.die=function(){
		this.isLive=false;
	}
	//���Ʒ���
	this.draw=function(){
		if(this.isLive){
			cxt.fillStyle=color;
			cxt.fillRect(this.x, this.y, 20, 20);
		}
	}
}

//---------------------------------------�����ķָ���--------------------------------------------

//��������̹��
function createEnemyTank(){
	enemyTankCount--;
	if(enemyTankCount<0){
		if(enemyTankCount<-2){
			alert("You Win!");
		}
		return;
	}
	enemyTanks.push(new EnemyTank(50, 20, 2, enemyColor));
	enemyTanks[enemyTanks.length-1].timer=window.setInterval("enemyTanks["+(enemyTanks.length-1)+"].run()", 50);
}

//����Ӣ��
function createHero(){
	heroLife--;
	if(heroLife<0){
		alert("Game Over!");
		return;
	}
	hero=new Hero(150, 150, 0, heroColor);
}
//����ǽ
function createWall(){
	//walls.push(new Wall());
}