const progress = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;

nextButton.addEventListener('click', ()=> {
    currentActive ++;
    if(currentActive >= circles.length){
        nextButton.disabled = true;
        currentActive = circles.length
    }
    update()
});


prevButton.addEventListener('click', ()=> {
    currentActive --;
    if (currentActive < 1){
        currentActive = 1;
    }
    update()
})

function update() {
    circles.forEach((circle, i)=> {
        if (i < currentActive){
            progress.style.width = '';
            circle.classList.add('active');
        } else {
            circle.classList.remove('active')
        }
    });
    const activeCircles = document.querySelectorAll('.active');
    progress.style.width = (activeCircles.length -1 ) / (circles.length -1) * 100 + '%';

    if(currentActive ===1 ){
        prevButton.disabled = true;
    } else if (currentActive  === circles.length){
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}