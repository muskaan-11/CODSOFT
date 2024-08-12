let inputs = document.querySelectorAll(".inputs");
let answer=document.querySelectorAll(".answer");
//let erase=document.querySelectorAll(".fa-solid fa-delete-left");
let string=" ";
inputs.forEach(input=>{
    input.addEventListener("click",()=>{
        console.log(input.innerText);
            if(input.innerText=="="){
                string=eval(string);
                answer[0].innerText=string;
            }
            else if(input.innerText=="C"){
                string=" ";
                answer[0].innerText=string;
            }
            else if(input.innerHTML==inputs[2].innerHTML){
                //string=removeLastChar(string);   
                string = string.slice(0, -1);
                answer[0].innerText=string;
            }

            else{
               string=string+input.innerText;
               answer[0].innerText=string;
            }
            
        
    })
})