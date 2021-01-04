function displayClickedButton(btn){
    let existingData = document.getElementById("txtDisplay").value;
    document.getElementById("txtDisplay").value = existingData + btn.innerText;
}

const keyboardSetUp = () =>{
    const control = document.getElementsByClassName("btnNum");
    for (const iterator of control) {
        iterator.addEventListener("click",function(){displayClickedButton(iterator)});
    }
}

const spaceBarFunc = ()=>{
    const control = document.getElementById("spacebar");
    control.addEventListener("click", function(control){
        document.getElementById("txtDisplay").value
            = document.getElementById("txtDisplay").value + " ";
    })
}


const backSpace = ()=>{
    const control = document.getElementById("backspace");
    control.addEventListener("click", function(){
        let txtVal = document.getElementById("txtDisplay").value;
        document.getElementById("txtDisplay").value = txtVal.substring(0,txtVal.length-1);
    })
}

const capslock = () =>{
    const control = document.getElementById("capslock");
    control.addEventListener("click", ()=>{
        const allBtnNums = document.getElementsByClassName("alpha");
        if(control.dataset.state == "0")
        {
            for (const iterator of allBtnNums) {
                iterator.innerHTML= iterator.innerHTML.toUpperCase();
            }
            control.dataset.state = "1";
        }
        else if(control.dataset.state == "1")
        {
            for (const iterator of allBtnNums) {
                iterator.innerHTML= iterator.innerHTML.toLowerCase();
            }
            control.dataset.state = "0";
        }
    })
}

const keyboardStartUp = () =>{
    keyboardSetUp();
    spaceBarFunc();
    backSpace();
    capslock();
}
keyboardStartUp();