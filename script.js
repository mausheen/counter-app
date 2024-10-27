

const curCount=document.querySelector("#cur-count");
let val=parseInt(curCount.innerText,10);



function updateDisplay(){
    curCount.innerHTML=val;
}


document.querySelector("#dec").addEventListener('click',()=>{
    if(val===0 && !document.querySelector(".new-ele")){
        const ele=document.createElement("div");
            ele.classList.add("new-ele");
            ele.textContent="Error : Can not go below 0";
            document.querySelector("#cur").append(ele);
            let hid=document.querySelector("#dec");
            hid.style.visibility="hidden";
        
    }
 else{
      val--;
      updateDisplay();
 }
})

document.querySelector("#inc").addEventListener('click',()=>{

    if(document.querySelector(".new-ele")){
    document.querySelector(".new-ele").remove();
    let hid=document.querySelector("#dec");
            hid.style.visibility="visible";
    }
    val++;

    updateDisplay();
})

document.querySelector("#clr").addEventListener('click',()=>{
  
    val=0;
    curCount.innerHTML=val;
})