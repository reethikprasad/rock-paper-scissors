const game=()=>{
    let pScore=0;
    let cScore=0;

    const startGame= ()=>{
        const playbtn=document.querySelector(".intro button");
        const introScreen=document.querySelector(".intro");
        const match =document.querySelector(".match");

        playbtn.addEventListener("click",()=>{
           introScreen.classList.add("fadeOut");
           match.classList.add('fadeIn')
        });
    };

    //Play Game
    const playMatch = ()=> {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelectorAll(".computer-hand");
        //comp options
        const computerOptions=["rock","paper","scissors"];

        options.forEach(option =>{
            option.addEventListener('click',function(){

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice=computerOptions[computerNumber];
            
            });
        });
        
     };

     const computerHands=(playerChoice,computerChoice)=>{

        const winner=document.queryCommandEnabled('.winner');

        if(playerChoice===computerChoice){
            winner.textContent='It is a tie';
            return;
        }

        if(playerChoice==='rock'){
            winner.textContent='Player Wins'
        }else{
            winner.textContent='Computer Wins'
            return;
        }

     };

    startGame();
    playMatch();
};

game();