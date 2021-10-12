var isScrolled = 0;
var lastScrollTop = 0;


var element = document.body;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop;
   var the_top = document.getElementById("top");
   var navList = document.getElementById("nav_list");
   if (st > lastScrollTop){
    navList.style.visibility = "hidden";
    the_top.style.visibility = "hidden";
   } else {
      the_top.style.visibility = "visible";
      navList.style.visibility = "visible";
   }
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);


function onItemSelect(){
    var list = document.getElementById("nav_list");
    if(list.style.display != "none"){
        isClicked = !(isClicked);
        list.style.display = "none";
    }
}

function showBack(){
    isScrolled++;
    if(isScrolled>0){
    var upArrow = document.getElementById("home_back");
        upArrow.style.display = "block";
        isScrolled = 0;

    }

    
}
function hideBack(){
    isScrolled = -44;
    var upArrow = document.getElementById("home_back");
    window.location.href = "#body_top";
    upArrow.style.display = "none";


    
}
