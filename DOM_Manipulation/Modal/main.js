const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('#modalContainer');
const closeBtn = document.querySelector('#close-btn');


modalBtn.addEventListener('click',()=>{
modal.style.display = 'block'
})
closeBtn.addEventListener('click',()=>{
modal.style.display = 'none'
})