document.getElementById("submit").addEventListener("click", heightConverter);

function heightConverter(){
    const foot = document.getElementById("foot").value;
    const inches = document.getElementById("inches").value;
    
    var cm = (foot+inches)*2.54;
    var n = cm.toFixed(0);


    document.getElementById("result").innerHTML = n;
}



