class Ball  {
    constructor(x,y)  {
        this.body=Matter.Bodies.circle(x,y,12,{density:5,friction:0.5,restitution:0.8});
        this.platform=Matter.Bodies.rectangle(185,670,50,10,{isStatic:true});
        this.platform1=Matter.Bodies.rectangle(215,655,10,20,{isStatic:true});
        this.img=loadImage("basketball.png");
        Matter.World.add(myWorld,[this.body,this.platform,this.platform1]);
    }
    display()  {
        ellipse(this.body.position.x,this.body.position.y,24,24);
        image(this.img,this.body.position.x-12,this.body.position.y-12,24,24);
    }
}