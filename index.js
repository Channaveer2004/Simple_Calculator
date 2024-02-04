let result = document.querySelector(".result");
let calculation = document.querySelector(".calculation");
let buttons = document.querySelectorAll(".btns");
let userinput = parseFloat(calculation.value);

let string = '';
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            result.value = string
        }

        else if(e.target.innerHTML == 'C'){
            string = string.substring(0, string.length-1);
            calculation.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = '';
            calculation.value = string;
            result.value = "0";
        }

        else if(userinput>0){
            string = eval(userinput.innerHTML);
            result.value = string;
        }

        else{
            string += e.target.innerHTML;
            calculation.value = string
        }
    })
})