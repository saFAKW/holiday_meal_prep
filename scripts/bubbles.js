var height;
var width;
var posLeft;
var speed;
var margin;
const bubblediv = document.querySelector('.bubblepop');
console.log("b");
for (let i = 0; i < 40; i++) {
    const height = Math.floor(Math.random() * 100) + 1;
    const width = height;
    const posLeft = Math.floor(Math.random() * 100);
    const speed = (Math.random() * 15) + 4;

    const di = document.createElement('div');
    di.className = 'fizz';
    di.style.height = height + 'px';
    di.style.width = width + 'px';
    di.style.left = posLeft + '%';
    di.style.animationDuration = speed + 's';
    di.style.webkitAnimationDuration = speed + 's';

    bubblediv.appendChild(di);
}