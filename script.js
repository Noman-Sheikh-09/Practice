// var a = parseInt(prompt("Enter your First Number"));
// var b = parseInt(prompt("Enter your Second Numebr"));
// var Sum = a + b;
// console.log("Sum is", Sum );

function hideShow(){
     var btn = document.getElementById("btn")
     var para = document.getElementById("para")
    
     if(para.style.display != 'none'){
        para.style.display = 'none'
     }
     else{
        para.style.display = 'block'
     }
}
