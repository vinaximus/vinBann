const cardHTML=`<div class="card">
                    <div class="colorbar ###">##tasktype##</div>
                    <div class="title">##ttle##</div>
                    <div class="description">##desc##</div>

                    <div class="tool-section">
                        <img id="btn-delete-card" width="11%" src="./Assets/icons8-delete.svg" >
                        <img src="./Assets/icons8-edit.svg" width="11%" alt="" id="btn-edit-card">
                    </div>
                </div>`


const btnNewCard=document.getElementById("new-card");
const cardEdit=document.querySelector(".card-edit");
const colorSelectors=document.querySelectorAll('.color-section-selector');
const btnSave=document.querySelector('.btn-save');
const cardContainer=document.querySelector('.card-container');
const card=document.querySelector('.card');
const fldTitle=document.querySelector('#fld-title');
const fldDesc=document.querySelector('#fld-description');
let toggleFlag=false;

btnNewCard.addEventListener('click', event=>{
    toggleFlag=!toggleFlag;
    cardEdit.style.display=toggleFlag?"flex":"none";
    
});


colorSelectors.forEach(colorSelector=>{
    colorSelector.addEventListener('click',event=>{
        
        for (ele of colorSelectors) {
            ele.classList.remove('color-section-selector-active');
        }
        console.log(event.target.classList);
        event.target.classList.add('color-section-selector-active');
    });
});

btnSave.addEventListener('click',event=>{
    // Colect data from all the fields
    
    const ttle=document.getElementById('fld-title').value;
    const desc=document.getElementById('fld-description').value;
    let tasktype;
    colorSelectors.forEach(ele=>{
        if (ele.classList.contains('color-section-selector-active')) {
            tasktype=ele.getAttribute('value');
        }
    })
    
    createCard(ttle, desc, tasktype);
});

function createCard(ttle, desc, tasktype) {
    let xcontent=cardHTML;

    xcontent=xcontent.replace("###",`bgcolor-${tasktype}`);
    xcontent=xcontent.replace("##tasktype##", tasktype);
    xcontent=xcontent.replace('##ttle##',ttle);
    xcontent=xcontent.replace('##desc##',desc);

    const cardele=document.createElement('div');
    cardele.innerHTML=xcontent;
    
    cardContainer.appendChild(cardele);
    cardEdit.style.display='none';
    
    fldTitle.value="";
    fldDesc.value="";
    
    toggleFlag=false;


}

