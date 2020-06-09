
//Nous donne les deux balls
let balls = document.getElementsByClassName('ball');
console.log(balls)
document.onmousemove = function (){
    //Avoir la position de la souris dans la fenetre en % en cas de resize de la fenetre
    let x = event.clientX * 100 /window.innerWidth + "%";
    let y = event.clientY * 100 /window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top= y;
        //Optimise la position des yeux
        balls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}

