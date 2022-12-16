let elemnt = document.getElementById("one")

elemnt.addEventListener("click",function () {
    let score = document.getElementById("playerOneScore")
    score.innerHTML++
})
let elemnt2 = document.getElementById("two")

elemnt2.addEventListener("click",function () {
    let score = document.getElementById("playerTwoScore")
    score.innerHTML++
})

const log1=document.getElementById('playerTwoLog');
let countdown
const timeout = document.getElementById("timeout");
log1.addEventListener("click",  () => {
    
    if(log1.innerHTML == "login"){
        log1.innerHTML = "logout"
        countdown = setInterval(() =>{
            this.timeout.innerHTML--;
        } ,1000)
    }else{
        log1.innerHTML = "login"
        this.timeout.innerHTML="30"
        clearInterval(countdown)
    }
})

const log2=document.getElementById('playerOneLog');

log2.addEventListener("click",  () => {
    
    if(log2.innerHTML == "login"){
        log2.innerHTML = "logout"
        countdown = setInterval(() =>{
            this.timeout.innerHTML--;
        } ,1000)
        
    }else{
        log2.innerHTML = "login"
        clearInterval(countdown)
        this.timeout.innerHTML="30"
    }
})
console.log(log1);
