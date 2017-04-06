window.onload= function(){
  const c = document.getElementById('canvas');
  c.width = window.innerWidth;
  c.height = 590;
var context = "";
  var data = [];

  const ctx = c.getContext('2d');
 const spaces = new space(c, ctx);





   $.ajax({
        url: "http://api.open-notify.org/astros.json",
        method: 'GET',
        success: function(res) {
        data = res.people;
        console.log(data);
        }

    });

    gameloop();


    var r = 0;
   function gameloop(){
     ctx.fillRect(0,0,c.width, c.height);
     spaces.update();
     spaces.render();
     ctx.save();
     ctx.translate(window.innerWidth/2,window.innerHeight/2);
     ctx.rotate(r / 500);
     ctx.translate(-370, 0);
     ctx.font= "14px Arial";
     ctx.fillStyle = "blue";
     for(var i = 0; i < data.length; i++){
           context = data[i].name;
          ctx.fillText(context, spaces.bgWidth/2,100 + 20 * i);
        }

        ctx.restore();

        r++;

     window.requestAnimationFrame(gameloop);
   }
   window.requestAnimationFrame(gameloop);
}
