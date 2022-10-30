let hour = "00"
let minute = "00"
let second = "00"
let millisecond = "00"


let time  = document.querySelector('.time')

time.innerHTML = `<div>
                  <span class='time_hour'>${hour} </span>
                  : <span class='time_minute'>${minute} </span> :
                  <span class='time_second'>${second}</span> :
                  <span class='time_millisecond'>${millisecond}</span>
                  </div>`



let time_hour = document.querySelector('.time_hour') 
let time_minute = document.querySelector('.time_minute') 
let time_second = document.querySelector('.time_second') 
let time_millisecond = document.querySelector('.time_millisecond') 
let interval


function start() {
   millisecond++

   if(millisecond > 99){
      millisecond = 0
      second++
      time_millisecond.innerHTML = '0' + 0
   }
   if (millisecond <= 9){
      time_millisecond.innerHTML = '0' + millisecond
   } else {
      time_millisecond.innerHTML = millisecond
   }

   if(second > 59){
      second = '00'
      minute++
      cc.innerHTML = '0' + 0
   }
   if (second <= 9 && second >= 1){
      time_second.innerHTML = '0' + second
   } else {
      time_second.innerHTML = second
   }

   if(minute > 59){
      minute = '00'
      hour++
      time_minute.innerHTML = '0' + 0
   }
   if (minute <= 9 && minute >= 1){
      time_minute.innerHTML = '0' + minute
   } else {
      time_minute.innerHTML = minute
   }


   if (hour <= 9 && hour >= 1){
      time_hour.innerHTML = '0' + hour
   }
}



document.querySelector('.time_btns_start').addEventListener('click', () => {
   clearInterval(interval)
   interval = setInterval(start, 10)

})
document.querySelector('.time_btns_stop').addEventListener('click',() => {
   clearInterval(interval)
})
document.querySelector('.time_btns_reset').addEventListener('click', () => {
   clearInterval(interval)
   minute = '00'
   second = '00'
   millisecond = '00'
   hour = '00'
   time_hour.innerHTML = hour
   time_minute.innerHTML = minute
   time_second.innerHTML = second
   time_millisecond.innerHTML = millisecond
})

let checks = document.querySelector('.checks')
document.querySelector('.time_btns_check').addEventListener('click',() => {

   if (second <= 9 && second >= 1){
      newsecond = '0' + second
   } else {
      newsecond = second
   }
   if (minute <= 9 && minute >= 1){
      newminute = '0' + minute
   } else {
      newminute = minute
   }
   if (millisecond <= 9 && millisecond >= 1){
      newmillisecond = '0' + millisecond
   } else {
      newmillisecond = millisecond
   }
   if (hour <= 9 && hour >= 1){
      newhour = '0' + hour
   } else {
      newhour = hour
   }

   let b = document.createElement('div')
   b.append(newhour + ':' + newminute + ':' + newsecond + ':' + newmillisecond)
   checks.append(b)
})





