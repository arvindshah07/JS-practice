const resultDisplay=document.querySelector('.result');
const buttons=document.querySelectorAll('.buttons button');

let currResult="";

buttons.forEach(button=>{
  button.addEventListener('click',()=>{
    const val=button.textContent ;
    if(val==='='){
     try{
         if(currResult!==""){
           const result=Function(`"use strict"; return (${currResult})`)();
           resultDisplay.textContent=result;
           currResult=result.toString()
         }
     }
     catch(error){
       resultDisplay.textContent = "Error";
        currentInput = "";
     }
    }
    else{
      currResult+=val ;
      resultDisplay.textContent=currResult ;
    }
  })
})
