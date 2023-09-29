let hourEl=document.getElementById("hour");
        let MinuteEl=document.getElementById("minute");
        let secondEl=document.getElementById("second");
        let ampmEl=document.getElementById("ampm");

        function updaeClock(){
            let h=new Date().getHours();
            let m=new Date().getMinutes();
            let s=new Date().getSeconds();
            let ampm="AM";
             if(h>12){
                h=h-12
                ampm="PM";
             }

             h=h<10 ? "0" + h : h;
             m=m<10 ? "0" + m : m;
             s=s<10 ? "0" + s : s;
             
             hourEl.innerHTML=h;
             MinuteEl.innerHTML=m;
             secondEl.innerHTML=s;
             ampmEl, (innerHTML=ampm);

             setTimeout(()=>{
                updaeClock();
             },1000);
        }
    updaeClock()