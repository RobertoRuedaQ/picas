$("document").ready(function(){
var value;
var cifra;
var fijas;
//genera el número aleatorio
function aleatorio(){
  cifra = [];
  for (i=0; i<4; i++){
   	cifra[i] = Math.floor(Math.random()*(9+1))
    //evita que se repita un número
    for(ii=0;ii<i;ii++){
		  if(cifra[i]==cifra[ii]){i-=1;break}
  	}
  }
  return cifra.join("")
}

//función para que value sea un array de números
function changeToArrayInteger(item){
 return item.toString().split("").map(function(t){
        return parseInt(t)
      })
}

//compara la cifra y determina si tiene fijas  
    function fija(value, cifra){
      valueNew = changeToArrayInteger(value)
      fijas = 0
      for(i=0; i< 4; i++){
        if(valueNew[i] === cifra[i]){
          fijas += 1
        }
      }
      return fijas
    }

  //busca si hay picas
function pica(value,cifra){
  valueNew = changeToArrayInteger(value)
  picas = 0
  for (i = 0; i < cifra.length; i++) {
    if(valueNew.includes(cifra[i])){
      picas +=1
    }
  }
  return picas
}

  //genera el submit cuando se oprime enter
  $(".input").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault()
      value = $(".input").val()
      aleatorio()
      fija(value, cifra)
      pica(value, cifra)
      $(".input").val("")
    }
  });
});