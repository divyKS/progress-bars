let circularPercentage = 0;

const leftHiderElement = document.querySelector('.hider-left');
const innerElement = document.querySelector('.inner');

setTimeout(()=>{
    leftHiderElement.style.zIndex = '1';
}, 4500);

setInterval(() => {
    if(circularPercentage == 100){
        clearInterval();
    } else {
        circularPercentage+=1;
        innerElement.textContent = circularPercentage + "%";
    }
}, 80);