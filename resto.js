$(document).ready(function(){
    $('.container').click(function(){
        $('#patti').slideToggle()
    })
    $('#but1').click(function(){
        $('#popup').show();
    })
    $('#cross').click(function(){
        $('#popup').hide();
    })
})

var contain = document.querySelector('.container');

contain.addEventListener('click',function(){
    nep();
});
function nep(){
    contain.classList.toggle('change');
}