function locStorageButton()
{
var key1=parseInt(document.getElementById("n1").value);
var value1=parseInt(document.getElementById("tb1").value);
localStorage.setItem(key1,value1);

var key1=parseInt(document.getElementById("n1").value);
var li="<li>"+key1+"</li>";
document.getElementById("locKey").innerHTML+=li;
document.getElementById("n1").value="";

var value1=parseInt(document.getElementById("tb1").value);
var li="<li>"+value1+"</li>";
document.getElementById("locValue").innerHTML+=li;
document.getElementById("tb1").value="";


}