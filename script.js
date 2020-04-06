'use strict';

const arrow1 = document.getElementsByClassName('rotate_left');
const arrow2 = document.getElementsByClassName('rotate_right');
const area = document.querySelector('.flip-wrapper');
const image = document.querySelector('.flip-box-front');
const controls = document.querySelectorAll('.controls');


for(var i=0; i<controls.length; i++){
 controls[i].style.display = 'inline-block';
}

function rotateLeft(node) {

    
}
function rotate_degree(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle +=360 : angle;

}
area.onclick = function(event) {
    let target = event.target;
    let arrow1_ = event.target.closest('.rotate_left');
    let arrow2_ = event.target.closest('.rotate_right');
    // if (event.target.className != 'controls') return;
     let photo = event.target.closest('.flip-box-front');
     if (event.target.className == 'rotate_left') {
         rotate_degree(photo);
     }
     else if(event.target.className == 'rotate_right') {
         photo.style.transform = "rotate(-90deg)";
     }
     

    //  this.image.style.transform = "rotate(90deg)";
    //     console.log('rotate+90deg');
    // }  else if(arrow2) {
    //     image.style.transform = "rotate(-90deg)";
    //     console.log('rotate-90deg');
    // }
    // else {
    //     return;
}
    // let imageStyle = getComputedStyle(image);
    // let angle = imageStyle.getPropertyValue('transform');
// console.log(angle);
          //   if (target.className == 'rotate_left' || 'rotate_right') {
          //       controls.closest('.flip-box-front').classList.toggle('unrotate');
          // image.style.transform = "rotate(90deg)";
            // console.log('click1');
            // return;
        // }else if(target.className == 'rotate_right'){
        // 	image.classList.toggle('unrotate');
            
        // }return;
        
// target = target.parentNode;
   
 // class Controls {
 //    constructor(controls) {
 //      this._controls = controls;
 //      controls.onclick = this.onClick.bind(this); // (*)
 //    }

 //    left() {
 //      let photo = event.target.closest('.flip-box-front');
 //      photo.style.transform = "rotate(90deg)";
 //    }

 //    right() {
 //      alert('right');
 //    }


 //    onClick(event) {
 //      let action = event.target.dataset.action;
 //      if (action) {
 //        this[action]();
 //      }
 //    };
 //  }

 //  new Controls(controls);
// arrow2.onclick = function() {
// 	turnRight();
// 	// image.style.transform = 'rotate(45deg)';
// }
// arrow1.onclick = function() {
// 	image.classList.add = ('unrotate');
// }

// // //  this.

// function turnRight() {
//   turnEllipse(45);
// }

// function turnLeft() {
//   turnEllipse(-45);
// }

// function turnEllipse(degrees) {
//   var angle = document.querySelector('.flip-box-front').data('angle');
//   if (!angle) {
//   	 angle = 0;
//   angle += angle + degrees;
//    document.querySelector('.flip-box-front').data("angle", angle).css({ transform: "rotate(" + angle + "deg)", transition: "1s" });
//   }
   
// }

// image.style.MozTransform = 'rotate(45deg)';
// image.style.WebkitTransform = 'rotate(45deg)';
// image.style.OTransform = 'rotate(45deg)';
// image.style.MsTransform = 'rotate(45deg)';
// image.style.transform = 'rotate(45deg)';
// this.style.transform = (this.className == 'arrow-left green' ? 'arrow-left' : 'arrow-left green');

// window.onload = function(){
//  let image = document.querySelector('flip-box-front');
//   image.style.MozTransform = 'rotate(45deg)';
//   image.style.WebkitTransform = 'rotate(45deg)';
//   image.style.OTransform = 'rotate(45deg)';
//   image.style.MsTransform = 'rotate(45deg)';
//   image.style.transform = 'rotate(45deg)';
// }