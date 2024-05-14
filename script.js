const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
let  counter=0
function incrementCounter(){
   const incrementEl=document.getElementById('Counter')
   counter++
   incrementEl.innerText=counter
}
function decrementCounter(){
   const decrementEl=document.getElementById('Counter')
   counter--
   decrementEl.innerText=counter
}
incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)