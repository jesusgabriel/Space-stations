const space = function(c, ctx){
  this.c = c;
  this.ctx = ctx;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 1;
  this.bgWidth = 1000;
  this.bgheight = 380;
this.bgImg = document.getElementById('space');
this.bgImage = document.getElementById('Earth');
}
space.prototype.update = function() {
  this.bgPos -= this.bgSpeed;
  if(this.bgPos < -this.bgWidth)
  this.bgPos = 0;
};
space.prototype.render = function(){
  for(let i = 0; i <= this.c.width/this.bgWidth+1; i++)
  this.ctx.drawImage(this.bgImg, this.bgPos+i*this.bgWidth,0);
  this.ctx.drawImage(this.bgImage, this.bgWidth/2, this.bgheight/2);
};
