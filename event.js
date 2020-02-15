function sent(){
    
    if(document.getElementById("1").value == "" && document.getElementById("2").value == ""
    && document.getElementById("3").value == "" && document.getElementById("4").value == ""){
        alert("Please complete the information needed");
    }else{
        alert("The information has been sent to our database");
    }
    
}