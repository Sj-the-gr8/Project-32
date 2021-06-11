class Ground  {
    constructor(x,y,w,h)  {
        this.w=w;
        this.h=h;
        this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
        Matter.World.add(myWorld,this.body);
    }
    display()  {
        rectMode(CENTER);   
        fill("#90C71C");
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}