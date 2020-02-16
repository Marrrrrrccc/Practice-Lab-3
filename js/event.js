function sent(){
    var title = document.getElementById("1").value;
    var sDate = document.getElementById("2").value;
    var pDate = document.getElementById("3").value;
    var eDate = document.getElementById("4").value;
    var select = document.getElementById("select").value;
    
    if( title == "" ||  sDate== ""
    ||  pDate== "" ||  eDate =="" || select == "Choose One:"){
        alert("Please complete the information needed");
    }else if (sDate>eDate){
        alert("The starting date should come first before the end date");
    }
    else if(pDate<sDate){
        alert("Posting date should come ahead of starting date");
    }
    else{
        alert("The information has been sent to our database");
    }
    
    
    
}