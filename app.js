$("document").ready(function(){
var value;
var cifra = [];
var fija;

//genera el submit cuando se oprime enter
  $(".input").keypress(function(e) {
      if (e.which == 13) {
        e.preventDefault();
        
          value = $(".input").val();
      //genera el número aleatorio
      function aleatorio(){
        for (i=0; i<4; i++){
         	cifra[i] = Math.floor(Math.random()*(9+1))
          //evita que se repita un número
          for(ii=0;ii<i;ii++){
      		  if(cifra[i]==cifra[ii]){i-=1;break}
        	}
        }
       return cifra.join("")
      }
      
      //compara la cifra y determina si tiene fijas  
        function fija(){
          for(i=0; i< cifra.length; i++){
            if(value[i] == cifra[i]){
              fija += 1
            } 
          }
        }

      //busca si hay picas
    function pica(){
      for (i = 0; i < cifra.length; i++) {
        value[i] == cifra.each()
      }
    }

//Handlebar
      var source   = $("#table-template").html();
      var template = Handlebars.compile(source);

      var context = {number: value, picas: pica, fijas: fija};
      var html    = template(context);
      $(".input").val("");

  }
//cierra el document
})

});