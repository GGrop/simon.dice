/*
croquis:

interfaz:
1-presiona empezar para jugar!/perdiste/ganaste
2-Indicador de nivel
3-boton empezar

4-4 cajas con colores distintos
//////////////////
ejemplo de flujo:
1-clickeo boton empezar
2-turno de la maquina
3-turno del usuario
4-gane?     repito paso 2 y 3 con + dificultad  :  perdiste 
5-ofrecer empezar de nuevo
*/
document.querySelector('#empezar').onclick = function(e){
    empezarJuego()
}
let secuenciaMaquina = []
let secuenciaJugador = []
let nivel = 0

const empezarJuego=()=>{
    turnoMaquina()
}

const turnoMaquina=()=>{
    const cuadradoAleatorio = obtenerCuadradoAleatorio()
    secuenciaMaquina.push(cuadradoAleatorio)
    ejecucionTurnoMaquina(secuenciaMaquina)
}

const obtenerCuadradoAleatorio=()=>{
    const $cuadrados = document.querySelectorAll('.cuadrado')
    let indice = Math.floor(Math.random()* $cuadrados.length)
    return $cuadrados[indice]
}

const ejecucionTurnoMaquina=(secuencia)=>{
    secuencia.forEach(function(secuencia,i){
        let DELAY = 1000*i
        setTimeout(function(){
            resaltar(`#${secuencia.id}`)
        },DELAY)
    })
}

const resaltar=(cuadradoId)=>{
    document.querySelector(cuadradoId).style.opacity = 1
    setTimeout(function(){
        document.querySelector(cuadradoId).style.opacity = 0.5
    },500)
}

const estadoDeJuego=(texto)=>{
    const $alert = document.querySelector('#estadoDeJuego')
    $alert.classList.add('alert-primary');
        if(/Perdiste/.test(texto)){
            $alert.classList.remove('alert-primary');
            $alert.classList.add('alert-danger');
            $alert.textContent = texto
        }
        if(/Ganaste/.test(texto)){
            $alert.classList.remove('alert-primary');
            $alert.classList.add('alert-success');
            $alert.textContent = texto
        }

    }
// estadoDeJuego('Perdiste :( vuelvelo a intentar!')
// estadoDeJuego('Ganaste! :D podes volver a jugar clickeando en empezar!')
