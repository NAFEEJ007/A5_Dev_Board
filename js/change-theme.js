// body-background

let bg_index = 0;
const bg_color = ["#98FB98","#F08080","#FFFFE0","#E6E6FA","#FFE4E1"]
const bodyBackground = document.getElementById("body-background");

// theme-changer
let i = 0;
// 
const boxContainer = document.getElementById("box-container");
const boxContainerTwo = document.getElementById("box-container-two");
const boxContainerThree = document.getElementById("box-container-three");
const boxContainerFour = document.getElementById("box-container-four");
const boxContainerFive = document.getElementById("box-container-five");
const boxContainerSix = document.getElementById("box-container-six");
const themeChanger =  document.getElementById("theme-changer");
document.getElementById("theme-changer")
    .addEventListener("click", function () {
if (i >= bg_color.length) {
    i = 0;

}    


boxContainer.style.backgroundColor = bg_color[i]; 
boxContainerTwo.style.backgroundColor = bg_color[i]; 
boxContainerThree.style.backgroundColor = bg_color[i]; 
boxContainerFour.style.backgroundColor = bg_color[i]; 
boxContainerFive.style.backgroundColor = bg_color[i]; 
boxContainerSix.style.backgroundColor = bg_color[i]; 
bodyBackground.style.backgroundColor = bg_color[i]; 
i = i+1;
          

        
})