function submitDetails(){

    var id=document.getElementById("t1").value;
    var book_name=documnet.getElementById("t2").value;
    var aut_name=documnet.getElementById("t3").value;
    var details=id + ' ' +book_name + ' '+ aut_name;
    document.getElementById("myid").textContent = details;
    alert("DATA SUBMITTED");
    console.log("hello");



}
