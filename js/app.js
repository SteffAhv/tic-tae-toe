var board = document.querySelector(".board-js");

board.addEventListener("click", addBgc);

/*board.addEventListener("dblclick",function(event){
  event.target.style.backgroundColor="blue";
});

board.addEventListener("mouseover",function(event){
  event.target.style.backgroundColor="yellow";/*
});
/*Eliminar eventos */
/*board.removeEventListener("click",addBgc);
};*/

var centinel=true;

function addBgc(event){
/*Para que no se desmaquete al hacer click en un tr y para que no cambie al volver a hacerle click*/
if(event.target.matches("td") && event.target.textContent === "") {
  if(centinel)
    event.target.textContent = "X";
  else
  event.target.textContent="O";
  centinel = !centinel;

}
}
