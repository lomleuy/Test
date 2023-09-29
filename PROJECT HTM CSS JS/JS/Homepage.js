let darkmode=document.querySelector("#darkmode");
darkmode.addEventListener("click",function(){
    if(darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon','fa-sun');
        document.body.classList.add('dark');
    }
    else{
        darkmode.classList.replace("fa-sun", 'fa-moon');
        document.body.classList.remove('dark');
    }
});