let elemnt = document.getElementById("one")
let countdown , logTimeout
const timeout = document.getElementById("timeout");
const reset = document.getElementById('reset')
let player1,player2
player1= document.getElementById('playerOneScore')
player2= document.getElementById('playerTwoScore')
elemnt.addEventListener("click",function () {
    timeout.innerHTML=10;
    clearInterval(countdown)
    let score = document.getElementById("playerOneScore")
    elemnt.classList.replace('playable','playless')
    elemnt2.classList.replace('playless','playable')
    countdown = setInterval(() =>{
        
        if (timeout.innerHTML==1){
            score.innerHTML++;
            
            clearInterval(countdown);
            timeout.innerHTML=10;
            elemnt.classList.replace('playless','playable')
            elemnt2.classList.replace('playable','playless')
            checkWinner();
        }else{timeout.innerHTML--;}
        
    },1000)
})
let elemnt2 = document.getElementById("two")

elemnt2.addEventListener("click",function () {
    timeout.innerHTML=10;
    let score = document.getElementById("playerTwoScore")
    clearInterval(countdown)
    elemnt2.classList.replace('playable','playless')
    elemnt.classList.replace('playless','playable')
    countdown = setInterval(() =>{
        
        if (timeout.innerHTML==1){
            score.innerHTML++;
            
            clearInterval(countdown);
            timeout.innerHTML=10;
            elemnt2.classList.replace('playless','playable')
            elemnt.classList.replace('playable','playless')
            checkWinner();
        }else{timeout.innerHTML--;}
        
    },1000)
})

const log1=document.getElementById('playerTwoLog');
log1.addEventListener("click",  () => {
    
    if(log1.innerHTML == "login"){
        log1.innerHTML = "logout"
        this.timeout.innerHTML=5
        clearInterval(countdown)
        countdown = setInterval(() =>{
            this.timeout.innerHTML--;
        } ,1000)
        
        logTimeout = setTimeout(() =>{
            document.getElementById('playerTwoScore').innerHTML="Lose";
            document.getElementById('playerOneScore').innerHTML="Win"
            clearInterval(countdown)
            this.timeout.innerHTML="GameOver"
            elemnt.classList.add('hidden')
            elemnt2.classList.add('hidden')
            reset.classList.remove('hidden')
        },5000)
    }else{
        log1.innerHTML = "login"
        this.timeout.innerHTML="10"
        clearInterval(countdown)
        clearTimeout(logTimeout)
    }
})

const log2=document.getElementById('playerOneLog');

log2.addEventListener("click",  () => {
    
    if(log2.innerHTML == "login"){
        log2.innerHTML = "logout"
        this.timeout.innerHTML=5;
        countdown = setInterval(() =>{
            this.timeout.innerHTML--;
        } ,1000)

        logTimeout = setTimeout(() =>{
            document.getElementById('playerTwoScore').innerHTML="Win";
            document.getElementById('playerOneScore').innerHTML="Lose"
            clearInterval(countdown)
            this.timeout.innerHTML="GameOver"
            elemnt.classList.add('hidden')
            elemnt2.classList.add('hidden')
            reset.classList.remove('hidden')
        },5000)
        
    }else{
        log2.innerHTML = "login";
        clearInterval(countdown);
        this.timeout.innerHTML="10";
        clearTimeout(logTimeout);
    }
})

function checkWinner(){
    if(player1.innerHTML==2){
        player1.innerHTML="Win"
        player2.innerHTML="Lose"
        elemnt.classList.add('hidden')
        elemnt2.classList.add('hidden')
        reset.classList.remove('hidden')
        this.timeout.innerHTML="GameOver"
    }else if(player2.innerHTML==2){
        player1.innerHTML="Lose"
        player2.innerHTML="Win"
        elemnt.classList.add('hidden')
        elemnt2.classList.add('hidden')
        reset.classList.remove('hidden')
        this.timeout.innerHTML="GameOver"
    }
}

reset.addEventListener('click',() => {
    player1.innerHTML=0;
    player2.innerHTML=0;
    elemnt.classList.remove('hidden')
    elemnt2.classList.remove('hidden')
    reset.classList.add("hidden")
    this.timeout.innerHTML=10
    log1.innerHTML='login';
    log2.innerHTML='login'
})