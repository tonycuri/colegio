$(document).ready(main);

var contador = 1;

function main(){
  $('#btn-menu').click(function(){
    if(contador == 1){
      $('#card_menu').animate({
        left:'0'
      });
      contador = 0;
    }else{
      contador = 1;
      $('#card_menu').animate({
        left:'-100%'
      });
    }
  });
};