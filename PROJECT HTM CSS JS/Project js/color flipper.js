let index=0;
function background(){
    let color=["green","pink","yellow","coral","blue","red"];

    document.querySelector("body").style.backgroundColor=color[index++];

    if(index>color.length-1){
        index=0;
    }
}