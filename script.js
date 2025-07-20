let btn = document.querySelector('button');


btn.addEventListener("click",function(){
let h3 = document.querySelector("h3");
let randomColor = getRandomColor()
h3.innerText = randomColor;
console.log("color updated")

//after that we will a]ly the style on our div 
let div = document.querySelector('div');
div.style.backgroundColor = randomColor;
})

//after that we will create a function for random color
function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    //after that we will create a variable where we will store all the colors var
    let colors = `rgb(${red},${green},${blue})`;
    return colors
}

getRandomColor()



