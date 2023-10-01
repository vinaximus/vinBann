


const btnNewCard=document.getElementById("new-card");
const cardEdit=document.querySelector(".card-edit");

let toggleFlag=false;

btnNewCard.addEventListener('click', event=>{
    toggleFlag=!toggleFlag;
    cardEdit.style.display=toggleFlag?"flex":"none";
    
});



