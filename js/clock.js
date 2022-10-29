var isim = prompt ("Lütfen isminizi yazınız!")
document.getElementById("myName").innerHTML = isim


  days = ["Pazar", "Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

function control(i) {
    if (i < 10) { i = "0" + i}
    return i
}

function time() {
    let date = new Date(), 
    day = days[date.getDay()],
    hours = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
    hours = control(hours),
    minute = control(minute),
    second = control(second),

    document.getElementById("myClock").innerHTML = hours + ":" + minute + ":" + second + " " + day;

}

setInterval(time,1000)