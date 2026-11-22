function aa() {
    let user=document.getElementByid("username").value;
    let pass=document.getElementById("password").value;
    if (user=="admin" && pass=="1234"){
        document.getElementById("result").innerHTML="Login Successful!";
        window.location.href="Lover.html"
    }else{
        document,getElementById("result").innerHTML="Wrong Username & Password";
    }}