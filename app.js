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
  $(".input").keypress(function(e) {
      if (e.which == 13) {
        e.preventDefault();
          var value = $(".input").val();
//Handlebar
      var source   = $("#table-template").html();
      var template = Handlebars.compile(source);

      var context = {number: "value"};
      var html    = template(context);
      $(".input").val("");

  }
//cierra el document
})

});