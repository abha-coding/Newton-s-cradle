class Bob
{
    constructor(x,y)
    {
        var options = {
            isStatic :true,
            restitution :0.3,
            friction :0.5,
            density :1.2
        }


        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body);
    }
  
display()
{
    var pos= this.body.position;
    var angle= this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);

    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(0,0,30,30);

    pop();
}
}