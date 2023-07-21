function fun(){
    var name=document.getElementById("name").value;
    var pass=document.getElementById("pass").value;

    if((name == "antony wilfred") && (pass == 12345678)){

        alert("login successful");

        window.location="https://antonywilfred.github.io/DashboardProject/";


    }else{

        alert("login failure"+"\n"+"click on Forget Password.It automatically updates username and password. And then Click on Submit button");

        
    }
}





    function fun1() {
        
    var inputF = document.getElementById("name");
    var inpute = document.getElementById("pass");

        inputF.value = "antony wilfred";
        inputF.innerHTML = 
               "Value = " + "'" + inputF.value + "'";

         inpute.value = "12345678";
        inpute.innerHTML = 
               "Value = " + "'" + inputF.value + "'";
    }


    
