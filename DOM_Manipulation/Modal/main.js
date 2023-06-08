const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('#modalContainer');
const closeBtn = document.querySelector('#close-btn');


modalBtn.addEventListener('click',()=>{
modal.style.display = 'block'
})
closeBtn.addEventListener('click',()=>{
modal.style.display = 'none'
})

window.addEventListener('click',(e)=>{
    if(e.target===modal){
        modal.style.display = 'none'
    }
})