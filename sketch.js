var myEngine,myWorld,boy,boyA,b,a,ball,ground,reset,backg,basketball,bg,night,score=0,power=0,flight=0,f,p,plus,minus,basket1,basket2,b1,b11,b13,b2,b21,b23,time,ch=10,c;

function preload()  {
    backg=loadImage("bg.png");
    night=loadImage("bg2.jpg");
    boyA=loadAnimation("6.png","5.png","4.png","3.png");
    b=loadAnimation("6.png");
    a=loadAnimation("3.png");
    p=loadImage("power.png");
    f=loadImage("flight.png");
    plus=loadImage("basketball_+.png");
    minus=loadImage("basketball_-.png");
    basket1=loadImage("basket_2.png");
    basket2=loadImage("basket.png");
    basketball=loadImage("basketball.png");
}

function setup()   {
    canvas = createCanvas(1500,800);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;
    ground=new Ground(width/2-150,height-10,1200,20);
    boy=new Boy(135,695,50);
    ball= new Ball(185,650);
    b1=new Basket(660,498,240,565);
    b11=new Ground(450,343,5,90);
    b13=new Ground(527,343,25,90);
    b2=new Basket(1092,633,158,295);
    b21=new Ground(950,555,5,45);
    b23=new Ground(1003,555,20,45);
    reset=createButton("Click to play again!!");
    reset.position(550,150);
    reset.hide();
    bg=backg;
    c=0;
}

function draw()  {
    background(255);
    image(backg,0,0,1200,800);
    image(p,1200,750,100,20);
    image(f,1202,700,105,20);
    image(plus,1310,750,20,20);
    image(plus,1310,700,20,20);
    image(minus,1360,755,20,10);
    image(minus,1360,705,20,10);
    image(basket1,450,215);
    image(basket2,950,487);
    Matter.Engine.update(myEngine);
    ground.display();
    boy.display();
    ball.display();
    //drawSprites();
    fill("black");
    textSize(23);
    text(power,1335,768);
    text(flight,1335,718);
    text("Score :"+score,25,30);
    text(mouseX+","+mouseY,mouseX,mouseY);
    if(c!=0)  {
        c++;
    }
    if(c==18)  {
        boy.boy.changeAnimation("follow_through");
        c=0;
    }
    if(ball.body.position.y>=800)  {
        text("The ball has fallen out of the world!!!",425,100);
        text("Game Over",550,70);
        text("Your score:"+score,540,130);
        reset.show();
        reset.mousePressed(function ()  { 
        Matter.Body.setPosition(ball.body,{x:185,y:650});
        Matter.Body.setVelocity(ball.body,{x:0,y:3.41});
        score=0;
        power=0;
        flight=0;
        reset.hide(); })
    }
    if((ball.body.position.x>452&&ball.body.position.x<515)&&(ball.body.position.y>310&&ball.body.position.y<370))  {
        text("5",485,265);
        if(frameCount%10==0)  {
            score+=5;
        }
    }
    if((ball.body.position.x>952&&ball.body.position.x<1013)&&(ball.body.position.y>540&&ball.body.position.y<570))  {
        text("10",970,490);
        if(frameCount%4==0)  {
            score+=10;
        }
    }
    if(ball.body.position.x>250&&ball.body.position.y>640&&ball.body.velocity.x<1&&ball.body.velocity.y<1)  {
        Matter.Body.setPosition(ball.body,{x:185,y:650});
        Matter.Body.setVelocity(ball.body,{x:0,y:3.41});
        boy.boy.changeAnimation("still");
    }
    getTime();
}

function mouseReleased()  {
    if((mouseX>1310&&mouseX<1330)&&(mouseY>750&&mouseY<770)&&(power<7))  {
        power++;
    }
    if((mouseX>1360&&mouseX<1380)&&(mouseY>755&&mouseY<765)&&(power>0))  {
        power--;
    }
    if((mouseX>1310&&mouseX<1330)&&(mouseY>700&&mouseY<720)&&(flight<7))  {
        flight++;
    }
    if((mouseX>1360&&mouseX<1380)&&(mouseY>705&&mouseY<725)&&(power>0))  {
        flight--;
    }
}

function keyPressed()  {
    if(keyCode==32&&ball.body.position.x>=160&&ball.body.position.x<=210&&(power!=0||flight!=0))  {
        boy.boy.changeAnimation("shoot");
        c=1;
        if(power==1)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:random(35,45),y:0});
        }
        else if(power==2)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:random(45,55),y:0});
        }
        else if(power==3)  {  //First basket 
            Matter.Body.applyForce(ball.body,ball.body.position,{x:random(58,62),y:0});
        }
        else if(power==4)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:random(70,80),y:0});
        }
        else if(power==5)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:random(75,85),y:0});
        }
        else if(power==6)  {  //Second basket
            Matter.Body.applyForce(ball.body,ball.body.position,{x:random(81,91),y:0});
        }
        else if(power==7)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:random(110,120),y:0});
        }
        if(flight==1)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:random(-105,-95)});
        }
        else if(flight==2)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:random(-130,-120)});
        }
        else if(flight==3)  {  //First basket
            Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:random(-147,-143)});
        }
        else if(flight==4)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:random(-155,-145)});
        }
        else if(flight==5)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:random(-177,-173)});
        }
        else if(flight==6)  {  //Second basket
            Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:random(-187,-177)});
        }
        else if(flight==7)  {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:random(-195,-185)});
        }
        if(power>0)  {
           
        }
    }
}

async function getTime()   {
    var response=await(await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).json();
    var time=Number(response.datetime.slice(11,13));
    if(time>5&&time<=17)  {
        bg=backg;
    }
    else  {
        bg=night;
    }
}