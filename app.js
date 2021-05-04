document.addEventListener("DOMContentLoaded", () =>{
  function aleatorio(min, maxi) {
    return Math.floor(Math.random()*(maxi-min +1)) + min
  }
  const cuadrados = document.querySelectorAll(".cuadrado")
  const monty = document.querySelectorAll(".mole")
  const tiempo = document.querySelector("#segundos")
  const puntos = document.querySelector("#puntos")
  let hitPosition;

  let resultado = 0
  let tiempoActual= 30
  let timerID;
  let timerMonty;

  function random() {
    cuadrados.forEach(cuadrado => {
      cuadrado.classList.remove("mole")
    })
    
    let indiceAleatorio = aleatorio(0, 8)
    let cuadradoAleatorio = cuadrados[indiceAleatorio]
    cuadradoAleatorio.classList.add("mole")
    
    hitPosition = cuadradoAleatorio.id
    console.log(hitPosition)
  }
  cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener("click",() => {
      if(cuadrado.id == hitPosition){
        console.log("asq")
        puntos.textContent = ++resultado
      }
    })
  })
  function moveMonty() {
    timerMonty = setInterval(random, 1000);
  }
  moveMonty()

  function tiempoAtras() {
    tiempo.textContent = --tiempoActual
    if (!tiempoActual) {
      clearInterval(timerID)
      clearInterval(timerMonty)
      alert("Se acabó el juego tus puntos son: " + resultado)
      hitPosition = "DJ" 
    }
  }

  alert("Preparados, listos, ya")
  timerID = setInterval(tiempoAtras, 1000)
})