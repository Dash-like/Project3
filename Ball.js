class Ball {
    constructor(x, y, radius) {
        var options = {
            restitution: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = radius;
        this.image = loadImage("Images/paper.png");
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }
}