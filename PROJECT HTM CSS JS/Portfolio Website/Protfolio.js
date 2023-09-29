const sections=document.querySelectorAll('.section');
const secBtns=document.querySelectorAll('.controlls');
const secBtn=document.querySelectorAll('.control');
const allsection=document.querySelector('.main-content');

function PageTransition(){
    for(let i=0;i<secBtn.length;i++){
        secBtn[i].addEventListener("click",function(e){
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn'
        });
    };
    allsection.addEventListener("click",function(){
        const id=e.target.datas
    })
};

PageTransition();