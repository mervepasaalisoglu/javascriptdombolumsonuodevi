let Name= prompt("Lutfen Adinizi Giriniz: ");
let myName= document.querySelector("#myName")
myName.innerHTML = `${Name}`

const update=(t)=>{
    if (t < 10) {
        return "0" + t;
      }
      else {
        return t;
      }
}
const clock=()=>{
    var date=new Date()
    let hour=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()
    var day=date.getDate()
    
    day=update(day)
    hour=update(hour)
    min=update(min)
    sec=update(sec)
    
    if (day == 1) {
        day = "Pazartesi";
      } else if (day == 2) {
        day = "Salı";
      } else if (day == 3) {
        day = "Çarşamba";
      } else if (day == 4) {
        day = "Perşembe";
      } else if (day == 5) {
        day = "Cuma";
      } else if (day == 6) {
        day = "Cumartesi";
      } else if (day == 7) {
        day = "Pazar";
      }
    
    document.querySelector("#clock").innerHTML= hour + ' : ' + min + ' : ' + sec + ' '+ day

}

setInterval(clock, 1000); 