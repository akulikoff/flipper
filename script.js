'use strict';
var rightFlip = 'rotate(90deg)';
var leftFlip = 'rotate(-90deg)';
const flip = document.getElementsByClassName('flip-container');
const flipper = document.getElementsByClassName('front')[0].closest('.flip-container');
const btns = document.getElementsByTagName('buttons');


for (let btn of btns) {
    let act = btn.getAttribute('data-action');
    if(act == 'down') {
        console.log('act');
    }
}
var pic = flip[0].firstChild.classList;
 // function getFlipUnit(target) {
 //    return target.closest('.front');
 // }
 function handleClick(evt) {
  //let pic = flip.firstChild;
  let myFlip = evt.target.closest(".front");
    
    let { action } = evt.target.dataset;
    //var newAngle = 
    if (action) {
        if (action == "right") {
            alert(myFlip);
            alert('pic');
           // pic.style.setProperty('transform', rightFlip);
          // pic.style.setProperty('border', '5px solid #333333');
          

        }else if (action == 'left') {
            alert('Привет от ' + evt.target.localName);
            
        }else if (action == 'top') {
            alert('top');
           myFlip.classList.add('vertical');
        }else if (action == 'down') {
            alert('down');
        }
    }
}
document.addEventListener("click", handleClick);



//добавление новой картинки с кнопками
var wrap = document.getElementById('wrap');
var lastFlip = wrap.lastChild;
var addFlip = lastFlip.cloneNode(true);
addFlip.id = 'my-flip';
wrap.appendChild(addFlip);
var addButton = document.getElementById('add');
addButton.addEventListener('click', add);
var delButton = document.getElementById('del');
delButton.addEventListener('click', del);


function add() {
    var newFlip = document.createElement('div');
    newFlip.innerHTML += '<div class="flip-container"><div class="flipper"><div class="front"><img src="https://cdn.monetnik.ru/storage/market-lot/31/97/163731/539952_mainViewLot.jpg" alt=""></div></div><div class="controls"><button data-action="right">Flip right</button><button data-action="left">Flip left</button>         <button data-action="top">Flip top</button>         <button data-action="down">Flip down</button>            </div>        </div>' ; 
           newFlip.addEventListener('click', add); //навесим событие на новую картинку
    wrap.appendChild(newFlip);
};
function del() {
    wrap.lastChild.remove();
}