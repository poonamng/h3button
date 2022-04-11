const h1btn=document.querySelector("#btn-one")
const h2btn=document.querySelector("#btn-two")
const h3btn=document.querySelector("#btn-three")
const input=document.querySelector("#text")
const outputDiv=document.querySelector("#output")
var inputText=input.value



h1btn.addEventListener('click',()=>{
    outputDiv.innerHTML=`<h1>${inputText}</h1>`
})

h2btn.addEventListener("click",function(){
    outputDiv.innerHTML=`<h2>${inputText}</h2>`
})

h3btn.addEventListener("click",function(){
    outputDiv.innerHTML=`<h3>${inputText}</h3>`
})















// Incs=34
// h1btn.addEventListener("click",function(){
//     Incs+=2
//     outputDiv.innerText=inputText
//     outputDiv.style.fontSize=`${Incs}px`
    
// })
// Incs=30
// h2btn.addEventListener("click",function(){
//     Incs+=2
//     outputDiv.innerText=inputText
//     outputDiv.style.fontSize=`${Incs}px`
//     outputDiv.style.fontSize=`${Incs}px`

// })
// Incs=28
// h3btn.addEventListener("click",function(){
//     Incs+=2
//     outputDiv.innerText=inputText
//     outputDiv.style.fontSize=`${Incs}px`
//     outputDiv.style.fontSize=`${Incs}px`
    

// })

