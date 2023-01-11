function clk(){

    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let part = "AM"

    if(hh > 12){
        hh -= 12;
        part = "PM"
    }
    if(hh == 0){
        hh = 12;
        part = "AM"
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let yy = date.getFullYear()
    let m = months[date.getMonth()]
    let d = date.getDate()
    let dy = days[date.getDay()]
    
    let time = hh + ":" + mm + ":" + ss;
    let calendar = m + " "+ d +", "+ yy;
    let calendar2 = dy;

    document.getElementsByClassName('txt-t')[0].textContent = time;
    document.getElementsByClassName('txt-p')[0].textContent = part;
    document.getElementsByClassName('txt-d')[0].textContent = calendar;
    document.getElementsByClassName('txt-dy')[0].textContent = calendar2;

    let t = setTimeout(function(){ clk() }, 1000);
}
clk()