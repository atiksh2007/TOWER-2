class Block extends BaseClass {
    constructor(x, y,width,height){
      super(x,y,width,height);
   this.image = loadImage("block.png");
      this.visibility=255
    }
  
  
  display(){
  console.log(this.bodyspeed);
  if(this.body.speed<10){
   // tint(255,100,240)
    super.display();

  }
  else{
  World.remove(world,this.body);
  push();
  this.visibility=this.visibility-10;
  tint(255,this.visibility);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  
  pop();
  }
  
  
  }
  
  };