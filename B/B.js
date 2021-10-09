let changeColorButton = document.getElementById("button");
let colorCode = document.getElementById("colorCode");
let body = document.getElementById("body");
changeColorButton.addEventListener("click",()=>{
        let ColorHex = '#';
        let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        for(let i=0;i<6;i++){
            let a = arr[Math.floor(Math.random() * 16)];
            ColorHex = ColorHex + a;
        }
        body.style.backgroundColor = ColorHex;
        colorCode.innerText = ColorHex;
})

let copy_Button = document.getElementById("copy_Button")
copy_Button.addEventListener("click", ()=>{
    let color_value = document.getElementById("colorCode").innerText;
    navigator.clipboard.writeText(color_value);
    console.log("You copied ", color_value);
})

let change_Button = document.getElementById("changeButton");
change_Button.addEventListener("click",()=>{
    body.style.backgroundColor = document.getElementById("inputColor").value;
    colorCode.innerText = document.getElementById("inputColor").value;
})
