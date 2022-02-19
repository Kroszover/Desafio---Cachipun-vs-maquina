/*
Requerimientos
1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
dependiendo de las veces que haya indicado el usuario que desea jugar.
2. Solicitar al usuario que indique su jugada.
Las opciones son las siguientes:
● Piedra
● Papel
● Tijera
3. Generar una jugada automática para la máquina usando la función Math .random()
de Javascript.
4. Definir a un ganador considerando la jugada del usuario y la generada
automáticamente para la máquina.
5. Indicar el resultado de la partida dependiendo del caso:
● Felicitar al ganador en caso de ser el usuario.
● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
la que gane.
● Declarar un empate.
_
*/
//DESARROLLO ->
/*1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
dependiendo de las veces que haya indicado el usuario que desea jugar.*/

const cantiJuegos = Number(prompt("Cuántas veces vamos a jugar?"))
const opciones = ["piedra", "papel", "tijera"];

/*
3. Generar una jugada automática para la máquina usando la función Math .random()
de Javascript.
*/
const maquina = () => opciones[Math.floor(Math.random() * 3)];
let yogane = 0
let maquinawin = 0

/* 2. Solicitar al usuario que indique su jugada.
Las opciones son las siguientes:
● Piedra
● Papel
● Tijera*/
for (let i = cantiJuegos; i > 0; i--) {
    let myPlay = prompt("Piedra, papel o tijera? - Debes escribirlo - Vamos!").toLocaleLowerCase();
    let pcPlay = maquina()



/*
4. Definir a un ganador considerando la jugada del usuario y la generada
automáticamente para la máquina.
*/
console.log("Tu elegiste ",myPlay)
  console.log("La maquina eligiò ", pcPlay)

    if (myPlay === pcPlay) {
        console.log("empate");
      }
    else if (myPlay === "piedra" && pcPlay === "tijera") {
      console.log("Ganaste! - Campeòn");
      yogane++
    }
    else if (myPlay === "papel" && pcPlay === "piedra") {
      console.log("Ganaste! - Campeòn");
      yogane++
    }
    else if (myPlay === "tijera" && pcPlay === "papel") {
      console.log("Ganaste! - Campeòn");
      yogane++
    }
    else if (pcPlay === "piedra" && myPlay === "tijera") {
      console.log("Perdiste! - Looser!");
      maquinawin++
    }
    else if (pcPlay === "papel" && myPlay === "piedra") {
      console.log("Perdiste! - Looser!");
      maquinawin++
    }
    else if (pcPlay === "tijera" && myPlay === "papel") {
      console.log("Perdiste! - Looser!");
      yogane++
    } 
    else{ 
      maquinawin ++
      alert("Jugada nó válida")
  }
}

/*5. Indicar el resultado de la partida dependiendo del caso:
● Felicitar al ganador en caso de ser el usuario.
● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
la que gane.
● Declarar un empate.*/


if(yogane>maquinawin){ console.log(`Resultado: ${yogane} - ${maquinawin}. Felicidades, ganaste el enfrentamiento`)}
else if(yogane<maquinawin){ console.log(`Resultado: ${yogane} - ${maquinawin}. Perdiste, lo siento`)}
else if(yogane=maquinawin){ console.log(`Resultado: ${yogane} - ${maquinawin}. Empate`)}

if(yogane>maquinawin){ alert(`Resultado: ${yogane} - ${maquinawin}. Felicidades, ganaste el enfrentamiento`)}
else if(yogane<maquinawin){ alert(`Resultado: ${yogane} - ${maquinawin}. Perdiste, lo siento`)}
else if(yogane=maquinawin){ alert(`Resultado: ${yogane} - ${maquinawin}. Empate`)}









