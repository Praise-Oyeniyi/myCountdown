function countDown(){
    const now = new Date();
    var eventDate = new Date(2020, 12, 3);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;


    var s = Math.floor(remTime/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h %= 24;
    m %=60;
    s %=60;  
    if(d < 10){
        d = '0' + d;
    };
    if(h < 10){
        h = '0' + h;
    };
    if(m < 10){
        m = '0'+m;
    };
    if(s < 10){
        s = '0'+s;
    };

    document.querySelector("#days").innerHTML = d;
    document.querySelector('#hours').innerHTML = h;
    document.querySelector("#minutes").innerHTML = m;
    document.querySelector("#seconds").innerHTML = s;
    
};
setInterval(countDown, 1000);