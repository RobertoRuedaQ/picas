$("document").ready(function(){

//genera el número aleatorio
function aleatorio(){
  var cifra = []
  for (i=0; i<4; i++){
    	cifra[i] = Math.floor(Math.random()*(9+1))
    //evita que se repita un número
    for(ii=0;ii<i;ii++){
		  if(cifra[i]==cifra[ii]){i-=1;break}
  	}
  }
  return cifra.join("")
  }
//genera el submit cuando se oprime enter
  $("input").keypress(function(event) {
      if (event.which == 13) {
          event.preventDefault();
          $("form").submit();
    }
  });
})
//cierra el document
};



