const open = document.getElementById('open');
const close= document.getElementById('close');
const containerFluid = document.querySelector('.container-fluid');

open.addEventListener('click',()=>{
    
    containerFluid.classList.add('show-nav')

})
close.addEventListener('click',()=>{
    containerFluid.classList.remove('show-nav')
})