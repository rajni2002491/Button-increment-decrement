const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
const ulelement = document.getElementById('items-list')

let  counter=0
function incrementCounter(){
   const incrementEl=document.getElementById('Counter')
   counter++
   incrementEl.innerText=counter
   const li=document.createElement('li')
   const textnode = document.createTextNode('Rajnikant'+ counter)
   li.appendChild(textnode)
   ulelement.appendChild(li)
}
function decrementCounter(){
   const decrementEl=document.getElementById('Counter')
   counter--
   decrementEl.innerText=counter
}
incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)