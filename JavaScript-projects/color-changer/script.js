const clickScreen = document.getElementById("change_color");
const changeColor = document.body;

clickScreen.addEventListener("click", () => {
    // changeColor.style.backgroundColor= "red";
    // changeColor.style.backgroundColor="green";
    const randomColor = getRandomColor();
    changeColor.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  
  
  
  