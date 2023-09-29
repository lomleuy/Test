const getElement=(selector)=>{
    const element=document.querySelector(selector);
    if(element) return element 
    throw new Error(`Please double check your class names, there is no ${selector} class`);
}
const links=getElement('.nav-links');
const navBtnDom=getElement('.nav-btn');

navBtnDom.addEventListener('click',()=>{
    links.classList.toggle("show-links");
});

const date=getElement('#date');
const currenYear=new Date().getFullYear();
date.textContent=currenYear;