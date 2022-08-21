const value=document.getElementById('value');
const btns=document.getElementById('.btn')
const increase=document.getElementById('increase')
const decrease=document.getElementById('decrease')
const reset=document.getElementById('reset')

let score=0;

increase.addEventListener('click',()=>{
 score++
console.log(score);
value.innerText=score;
})

decrease.addEventListener('click',()=>{
  score--
 console.log(score);
 value.innerText=score;
 })
 
reset.addEventListener('click',()=>{
  score=0;
 console.log(score);
 value.innerText=score;
 })
 value.innerText=score;
  
