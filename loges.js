var logeswaran = document.querySelector(".op-legend");
function miakhalifa(){
    logeswaran.style.display="block";
}
// if i click cancel button automatically refresh itself
var jayanthi = document.getElementById("mia");
jayanthi.addEventListener("click",function(event){
    event.preventDefault();
    logeswaran.style.display="none";
   
})
// select manju,jothi,manisha,pavada,gp
var selvi = document.querySelector(".manju");
var rajamanar = document.querySelector(".kamatchi")
var karpagam = document.getElementById("jothi");
var latha = document.getElementById("manisha");
var pandian = document.getElementById("pavada");
var ganapathi = document.getElementById("gp")
ganapathi.addEventListener("click",function leelaigal(event)
{
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","indirani");
    div.innerHTML = `<h2>${karpagam.value}</h2>
    <h3>${latha.value}</h3>
    <p>${pandian.value}</p>
    <button class="kamatchi" onclick="fucking(event)">Delete<button> `
    selvi.append(div)
    logeswaran.style.display="none";
   
})
function fucking(event)
{
  event.target.parentElement.remove()
}
