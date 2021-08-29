function fun(){
    var name=document.getElementById("name").value;
    var pass=document.getElementById("pass").value;

    if((name == "antony wilfred") && (pass == 1234)){

        alert("login successful");

        window.location="https://welcomepage01.000webhostapp.com/";


    }else{

        alert("login failure");

        
    }
}



    var inputF = document.getElementById("name");
    var inpute = document.getElementById("pass");


    function fun1() {
        inputF.value = "antony wilfred";
        inputF.innerHTML = 
               "Value = " + "'" + inputF.value + "'";

         inpute.value = "1234";
        inpute.innerHTML = 
               "Value = " + "'" + inputF.value + "'";
    }


    
