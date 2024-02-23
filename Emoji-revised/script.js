


document.querySelector('body').addEventListener('mousemove', eyeball); /* adds an event listener to the body element. It listens for the mousemove event. When the mousemove event happens, it triggers the eyeball function. */

function eyeball(){  /* It selects all elements with the class .eye*/
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth /2 )  /* calculate the position of the mouse relative to each eyeball element.*/
        let y = (eye.getBoundingClientRect().top) +  (eye.clientHeight / 2)
        let radian = Math.atan2(event.pageX - x, event.pageY - y); /* calculate the rotation angle for each eyeball based on the mouse position*/
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+ rot+ "deg)"; /* line applies the calculated rotation (rot) to the eyeball element's CSS transform property*/
    })
};



