const disqueSpan = document.querySelector('.disque') // faire le score partie 1/4

let disque =  0 //faire le score partie 2/4

const body = document.querySelector('body');

var xMousePos = 0;
var yMousePos = 0;
document.onmousemove = function(e)
{
  xMousePos = e.clientX + window.pageXOffset;
  yMousePos = e.clientY + window.pageYOffset;
};

function Random_Color()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6)
    {
        color = "0" + color;
    }
    return "#" + color;
}

//bonus pour savoir où est la souris 
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);


function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}


//evenement scroll up et down
window.addEventListener('wheel', function(event)
{
    //let disque = nvCercle;
    if ( event.deltaY < 0 )
    {
    //console.log('scroll up');
    //document.getElementById('status') //mettre en com après
        disque += 1;
    }
    if ( event.deltaY < 0 && disque > 1000)
    {
        alert("Bon... S'agirait de doser hein.")
    }
    else if ( event.deltaY > 0 && disque != 0)
    {
    //console.log('scroll down');
    //document.getElementById('status')
        disque -= 1; // doser le score partie 3/4
    }
    disqueSpan.textContent = disque + ' px' // implanter le score partie 4/4
});


document.addEventListener('click', (e) =>
{
    const Cercle = document.createElement('div');
    let ok = disque + 'px';
    Cercle.style.width = ok;
    Cercle.style.height = ok;
    //nvCercle.style.transitionProperty = WheelEvent;
    Cercle.style.background = Random_Color();
    Cercle.style.position = 'absolute';
    Cercle.style.borderRadius = '50%';
    Cercle.style.top = '0px';
    Cercle.style.left = '0px';
    let posX = e.clientX + window.pageXOffset - disque/2;
    let posY = e.clientY + window.pageYOffset - disque/2;
    Cercle.style.zIndex = -1;
    Cercle.style.transform = `translate(${posX}px, ${posY}px)`;
    body.appendChild(Cercle);
    
})