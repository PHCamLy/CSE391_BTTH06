function blink(){
    document.getElementById('notify-content').style.color='black'
    setTimeout(function(){document.getElementById('notify-content').style.color='red'},250)
}
function clock(){
    let hours = new Date().getHours()
    let minute = new Date().getMinutes()
    let secound = new Date().getSeconds()
    document.getElementsByClassName('hour1').src="/img/0" + Math.floor(hours/10) + ".gif"
    document.getElementsByClassName('hour2')[0].src="/img/0" + hours%10  + ".gif"
    document.getElementById('minute1').src="/img/0" + Math.floor(minute/10) + ".gif"
    document.getElementById('minute2').src="/img/0" + minute%10+ ".gif"
    document.getElementById('secound1').src="/img/0" + Math.floor(secound/10) + ".gif"
    document.getElementById('secound2').src="/img/0" + secound%10 + ".gif"
    if(hours>=0 && hours<12){
        document.getElementById('notify-content').textContent = 'Chao buoi sang'
        document.getElementById('notify-content').style.fontSize='15x'
    }
    else if(hours>=12 && hours<17){
        document.getElementById('notify-content').textContent= 'Chao buoi chieu'
        document.getElementById('notify-content').style.fontSize='30px'
    }
    else{
        document.getElementById('notify-content').textContent = 'Chao buoi toi'
        document.getElementById('notify-content').style.fontSize='60px'
    }
}
setInterval('clock()',0)
setInterval('blink()',500)