let canvas = document.getElementById("Mycanvas");
let c = canvas.getContext("2d");

let currentTime = Date.now();
let circleX = 70;
let velocityX = 70; 



setInterval(() => {
    let delta =( Date.now() - currentTime) / 1000;
    let fps = (1 / delta );
    currentTime = Date.now();   
    console.log("fps" + fps);


        c.beginPath();
    c.arc(200, 150, 100, 0, 2 * Math.PI);
    c.fillStyle = "orange";
    c.fill();
    c.stroke();

    c.beginPath();
    c.arc(150,120,25 ,0 ,1 *Math.PI);
    c.fillStyle = "black";
    c.fill();
    c.stroke();

    c.beginPath();
    c.arc(240,120,25 ,0 ,1 *Math.PI);
    c.fillStyle = "black";
    c.fill();
    c.stroke();

    c.beginPath();
    c.lineCap = "round";
    c.moveTo(150, 200);
    c.lineTo(250, 200);
    c.stroke();



    canvas.addEventListener("click", open);
    function open() {
    
        c.beginPath();
        c.arc(150,120,25 ,0 ,2 *Math.PI);
        c.fillStyle = "black";
        c.fill();
        c.stroke();

        c.beginPath();
        c.arc(220,200, 20 , 0 , Math.PI, false);
        c.closePath();
        c.lineWidth = 2;
        c.fillStyle = 'red';
        c.fill();
        c.strokeStyle = '#550000';
        c.stroke();

        c.beginPath();
        c.arc(240,120,25 ,0 ,2 *Math.PI);
        c.fillStyle = "black";
        c.fill();
        c.stroke();
    }

    if(circleX > 270 ){
        velocityX *= -1;
    }
    else if(circleX < 0)
    {
        velocityX *= -1;
    }

    circleX += velocityX * delta;

    

},1000/1
);

