const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";



function datosBasicos(name, lastname, nickname) {
  
  let wholename = name + " " + lastname
  return console.log("Mi nombre es " + wholename + ", pero prefiero que me digas " + nickname + ".");
}

datosBasicos("Ignacio", "Duarte", "nacho")


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion1 == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion1 == "Basic"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion1 == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion1 == "ExpertPlus") { 
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else {console.log("desconocido")}



for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

var resultado =   parseInt(prompt("Cuanto es 2+2?"));
if (resultado == 4) {
  console.log("you win!") }
while (resultado != 4) {
  console.log("keep trying!")
  resultado = parseInt(prompt("Cuanto es 2+2?"));
  if (resultado == 4) {
    console.log("you win!")
    break;
  }
}