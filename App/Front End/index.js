var btn =document.getElementsByClassName('btn')[0];
btn.addEventListener('click',function(){
btn.classList.toggle('bouncein');
setTimeout(1000,()=>{
btn.classList.toggle('bouncein');

});


});
