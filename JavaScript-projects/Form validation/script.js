const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const submit = document.getElementById("submit");


submit.addEventListener("click", () => {
    if(name == "" || name !=/^[A-Za-z]+$/){
        alert('Please enter a valid Name');
    }
    else if(!emailPattern.test(email)) {
        alert("Email should contain '@'");
    }

    else if(password.length<0){
            alert("Enter correct Password");

    }
    else{
         // form is submitted successfully   
    }

});