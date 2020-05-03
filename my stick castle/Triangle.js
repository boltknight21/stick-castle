
class Triangle{
    constructor(x, y,sides) {
      var options = {
     isStatic:true
      }
      this.body = Bodies.polygon(x,y,sides, options);
      this.side = sides;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(255);
    polygon(pos.x,pos.y,this.side)
      pop();
    }
  }
