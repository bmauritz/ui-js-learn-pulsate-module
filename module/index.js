var server = require("./server");
var router = require("./router");

server.start(router.route);



    var intervalId;
    var opacity = 0.0;

    function setup() {

      
      var increment = 0.01;
      

      var increasing = true;
      //var startTime = new Date();
      var interval = 100; // ms





      ////////////////////////////////////////
      intervalId = setInterval(function draw() {
        //var timePassed = new Date() - start;
        
        
        
        // Change opacity a little
        if (increasing) {
          opacity += increment;   // opacity = opacity + increment
        } else {
          opacity -= increment;   // opacity = opacity - increment
        }
        
        // Check if we need to change direction
        if (opacity >= 1.0) {
          increasing = false;
        } else if (opacity <= 0) {
          increasing = true;
        }


        
        // Print value
        console.log('Opacity', opacity);
        console.log('increasing', increasing);

        //rect();

         

      }, interval);
      ////////////////////////////////////////
      
    }

    // Setup 
    setup();
   

    function stopIt() {
      clearInterval(intervalId);
    }

    /*function rect() {
        var ctx = document.getElementById('myCanvas').getContext('2d');

        ctx.globalAlpha = opacity;
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillStyle="blue";
        ctx.fillRect (0, 0, 500, 500);
        
        }*/

    

