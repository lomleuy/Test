var words=["Disigner","Developer"];

var counter=0;
var currenIndex=getRandomInt(0,words.length-1);

var text=document.querySelector("#type-it");

var stopInterval=setInterval(()=>{step();},200);
var delInterval=null;
var delTimeout=null;

function getRandomInt(min,max){
    min=Math.ceil(min);
    max=Math.ceil(max);

    return Math.floor(Math.random()*(max-min+1))+min;
}

function delIntervalCallback(){
    delInterval=setInterval(()=>{del();},100);
    clearInterval(delInterval);
}

function del(){
    if(counter==0){
        let newIndex=getRandomInt(0,words.length-1);

        while(newIndex==currenIndex){
            newIndex=getRandomInt(0,words.length-1);
        }
        currenIndex=newIndex;
        clearInterval(delInterval);

        stopInterval=setInterval(()=>{step();},200);
    }
    else{
        text.textContent=text.textContent.slice(0,-1);
        counter--;
    }
}

function step(){
    if(counter==words[currenIndex].length){
        clearInterval(stopInterval);
        delTimeout=setTimeout(()=>{delIntervalCallback();},200);
    }
    else{
        text.textContent+=words[currenIndex][counter];

        counter++;
    }
}