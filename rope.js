class Rope {
    constructor(A,B){
        var options={
            bodyA: A,
            pointB: B,
            stiffness: 1,
            length: 50
        }

        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display(){

        var posA=this.body.bodyA.position;
        var posB=this.body.pointB.position;
        push();

        stroke("pink");
        strokeWeight(7);

        line(posA.x,posA.y,posB.x,posB.y);
        pop();
    }

}