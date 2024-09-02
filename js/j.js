/*================== Active Link ==================================*/

const activeLink = document.querySelectorAll(".active");

function activeSction(){
   
    activeLink.forEach(m => m.classList.remove("activeLinkkkk"));
    this.classList.add("activeLinkkkk") ;  
}
activeLink.forEach(m=>m.addEventListener("mouseover" , activeSction) );


/************************************* */
const toggle = document.getElementById("toggle"),
      home = document.getElementById("home"),
      slide = document.getElementById("slide");


      toggle.addEventListener("click" , ()=>{
        slide.classList.toggle("show");
        home.classList.toggle("show")


      })
