const leftbutton = document.querySelectorAll(".left_button span");
for (let i = 0; i < leftbutton.length; i++) {
  leftbutton[i].addEventListener("click", function () {
    const current = document.querySelector(".active_gl");
    current.className = current.className.replace("active_gl", "");
    leftbutton[i].className = "active_gl";
  });
}

const rightbutton = document.querySelectorAll(".right_button a");
for (let i = 0; i < rightbutton.length; i++) {
  rightbutton[i].addEventListener("click", function (e) {
    e.preventDefault();
    const current = document.querySelector(".active_btn");
    current.className = current.className.replace("active_btn", "");
    rightbutton[i].className = "active_btn";
  });
}

//toggle right btn
//Search Menu
const search=document.querySelector(".search_box input");
const images=document.querySelectorAll(".container .content .card");
search.oninput=()=>{
  images.forEach(hide=>hide.style.display="none");
  let value=search.value;
  images.forEach(filter=>{
    let title=filter.getAttribute("name");
    if(search.value==title){
      filter.style.display="flex";
    }
    if(value==""){
      filter.style.display='flex';
    }
  })
}
