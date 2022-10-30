

let hour = "00"
let minute = "00"
let second = "00"
let millisecond = "00"


let time = document.querySelector('.time')

time.innerHTML = `<div>
                  <span class='time_hour'>${hour} </span>
                  : <span class='time_minute'>${minute} </span>:
                  <span class='time_second'>${second}</span> :
                  <span class='time_millisecond'>${millisecond}</span>
                  </div>`



let aa = document.querySelector('.time_hour') 
let bb = document.querySelector('.time_minute') 
let cc = document.querySelector('.time_second') 
let dd = document.querySelector('.time_millisecond') 





// let a = setInterval(() => {
//    hour++
//   if (hour <= 9){
//      aa.innerHTML = '0' + hour
//   } else {
//      aa.innerHTML = hour
//   }
// }, 3600000)


// let b = setInterval(() => {
//    minute++
//   if(minute > 58){
//    minute = 0
//   }
//   if (minute <= 9){
//      bb.innerHTML = '0' + minute
//   } else {
//      bb.innerHTML = minute
//   }
// }, 60000)






function start() {
   millisecond++

   if(millisecond > 99){
      millisecond = 0
      second++
      dd.innerHTML = '0' + 0
   }
  if (millisecond <= 9){
     dd.innerHTML = '0' + millisecond
  } else {
     dd.innerHTML = millisecond
   }

   if(second > 2){
      second = '00'
      minute++
      cc.innerHTML = '0' + 0
   }
   if (second <= 9 && second >= 1){
      cc.innerHTML = '0' + second
   } else {
      cc.innerHTML = second
   }

   if(minute > 2){
      minute = '00'
      hour++
      bb.innerHTML = '0' + 0
   }
   if (minute <= 9 && minute >= 1){
      bb.innerHTML = '0' + minute
   } else {
      bb.innerHTML = minute
   }


   if (hour <= 9 && hour >= 1){
      aa.innerHTML = '0' + hour
   } else {
      aa.innerHTML = hour
   }
}

let interval


document.querySelector('.time_btns_start').addEventListener('click', () => {
   clearInterval(interval)
   interval = setInterval(start, 10)

})
document.querySelector('.time_btns_stop').addEventListener('click',() => {
   clearInterval(interval)
})
document.querySelector('.time_btns_reset').addEventListener('click', () => {
   minute = '00'
   second = '00'
   millisecond = '00'
   hour = '00'
   aa.innerHTML = hour
   bb.innerHTML = minute
   cc.innerHTML = second
   dd.innerHTML = millisecond
})






