function draw() {
    var canvas = document.getElementById("MyCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        objGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        objGradient.addColorStop(0, 'red');
        objGradient.addColorStop(1 / 6, 'orange');
        objGradient.addColorStop(2 / 6, 'yellow');
        objGradient.addColorStop(3 / 6, 'green')
        objGradient.addColorStop(4 / 6, 'blue');
        objGradient.addColorStop(5 / 6, 'Indigo');
        objGradient.addColorStop(1, 'Violet');

        ctx.fillStyle = objGradient;
        ctx.fillRect(0,0, canvas.width,200);
        ctx.fill();
    }
    window.onload = function() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById("scream");
        ctx.drawImage(img, 10, 10);
      }