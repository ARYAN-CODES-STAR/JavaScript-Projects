let x = Math.floor(Math.random()*10 + 1);

 let guess=1;

 document.getElementById("submitguess").onclick = function() {
    let y = document.getElementById("submitguess").value;

    if(x==y){
        alert("You made right guess");
    }
    else{
        alert("Try Again");
    }
 }
