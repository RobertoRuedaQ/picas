$("document").ready(function(){
var value;
var cifra;
var fijas;
var picas;
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
      for(i=0; i< cifra.length; i++){
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
//se genera número aleatorio
aleatorio()
console.log(cifra)

  //genera la acción cuando se oprime enter
  $(".input").keypress(function(e){
    if (e.which == 13) {
      e.preventDefault()
      //validacion de los datos ingresados al input
      if($(".input").val() == ""){
        $(".input").addClass("has-error")
        $("input").siblings('p').html('Escribe un número de cuatro dígitos no repetidos');
      }
      if($(".input").val().indexOf(' ')>=0){
        $(".input").addClass("has-error")
        $("input").siblings('p').html('No puede contener espacios');
      }
      if($(".input").val().length < 4){
        $(".input").addClass("has-error")
        $("input").siblings('p').html('El número debe tener 4 dígitos');
      }
      if($(".input").val().length > 4){
        $(".input").addClass("has-error")
        $("input").siblings('p').html('El número solo debe tener 4 dígitos');
      }
      else{
      $(".input").parent().removeClass("has-error");
      $(".input").siblings('p').html('');
      //captura el valor del número ingresado 
      value = $(".input").val()

      //ejecuta las funciones
      var fijaTemporal = fija(value, cifra)
      var picaTemporal = pica(value, cifra)
      //Handlebar
      var source   = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var context = {number:"value", valorPicas:"picaTemporal", valorFijas:"fijaTemporal"};
      var html    = template(context);

      //test
      console.log(fijaTemporal)
      console.log(picaTemporal)
      console.log(value)
      console.log(cifra)
      //condicional para cuando gana
      if(fijaTemporal ===4 && picaTemporal ===4){
        $("#myModal").focus()
      }
      //limpia el input
      $(".input").val("")
    }
  }

  });
});