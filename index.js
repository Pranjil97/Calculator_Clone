let display= document.getElementsByClassName("display")[0];
let buttons = Array.from(document.getElementsByClassName("button"))

const ae=(e)=>{
    switch(e.target.innerText){default:display.innerText += e.target.innerText }}

for(items of buttons){items.addEventListener("click",ae)}

function all_clear(){display.innerText=""}

const ac=document.getElementById("btnac")
ac.addEventListener("click",all_clear)

const del=document.getElementById("btndel")
del.addEventListener("click",del)

function dele(){ 
    if(display.innerText){
        display.innerText = display.innerText.slice(0,-1)
    }
}

const evaluate_calc = () => {
    if(display.innerText){
    const st= display.innerText
    const cal=eval(st)
    const n=parseInt(cal)
    display.innerText= n
    }else{
        display.innerText = ""
    }
}