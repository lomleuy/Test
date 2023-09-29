let open=document.getElementById("openform");
let around=document.getElementById("around");
open.addEventListener("click",function(){
    around.style.display="block";
});

window.addEventListener("click",function(e){
    if(e.target===around){
    around.style.display="none";
    }
});

let darkmode=document.querySelector("#darkmoon");
darkmode.addEventListener("click",function(){
    if(darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon','fa-sun');
        document.querySelector(".form_control").classList.add('dark');
    }
    else{
        darkmode.classList.replace("fa-sun", 'fa-moon');
        document.querySelector(".form_control").classList.remove('dark');
    }
});



 