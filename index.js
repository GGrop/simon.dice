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

let secuenciaMaquina = []
let secuenciaJugador = []
let nivel = 0

document.querySelector('#empezar').onclick = function(e){
    empezarJuego()
}


const empezarJuego=()=>{
    ReinciarVariables()
    const $cuadradoAleatorio = obtenerCuadradoAleatorio()
    turnoMaquina($cuadradoAleatorio)
    let DELAY_JUGADOR = secuenciaMaquina.length*1050
    setTimeout(function(){
        turnoJugador()
    },DELAY_JUGADOR)
    // bloquearJuegoUsuario()
    
}

const ReinciarVariables=()=>{
    // let secuenciaMaquina = []
    // let secuenciaJugador = []
    // let nivel = 0
}

const turnoMaquina=($cuadradoAleatorio)=>{
    const TURNO_MAQUINA_ALERT = 'Turno de la maquina...'
    estadoDeJuego(TURNO_MAQUINA_ALERT)
    secuenciaMaquina.push($cuadradoAleatorio)
    ejecucionTurnoMaquina(secuenciaMaquina)
}

const bloquearJuegoUsuario=()=>{
    console.log("bloqueo el juego")
}

const obtenerCuadradoAleatorio=()=>{
    const $cuadrados = document.querySelectorAll('.cuadrado')
    let indice = Math.floor(Math.random()* $cuadrados.length)
    return $cuadrados[indice]
}

const ejecucionTurnoMaquina=(secuencia)=>{
    secuencia.forEach(function($cuadrado,i){
        let DELAY = 1000*i
        setTimeout(function(){
            resaltar($cuadrado)
        },DELAY)
    })
}

const resaltar=($cuadrado)=>{
    const cuadradoId =`#${$cuadrado.id}`
    document.querySelector(cuadradoId).style.opacity = 1
    setTimeout(function(){
        document.querySelector(cuadradoId).style.opacity = 0.5
    },500)
}

const turnoJugador=()=>{
    const TURNO_JUGADOR_ALERT = 'Es tu turno jugador!'
    estadoDeJuego(TURNO_JUGADOR_ALERT)
    document.querySelectorAll('.cuadrado').forEach(function($cuadrado){
        $cuadrado.onclick = clickUsuario
    })
}

const clickUsuario=(e)=>{
    const $cuadradoUsuario =e.target
    resaltar($cuadradoUsuario)
    secuenciaJugador.push($cuadradoUsuario)
    console.log(secuenciaJugador)
    comparacionSecuencias()
}

const comparacionSecuencias=()=>{

}

const estadoDeJuego=(texto)=>{
    const $alert = document.querySelector('#estadoDeJuego')
    $alert.classList.add('alert-primary');
        if(/Perdiste/.test(texto)){
            $alert.classList.remove('alert-primary');
            $alert.classList.add('alert-danger');
            $alert.textContent = texto
        } else if(/Ganaste/.test(texto)){
            $alert.classList.remove('alert-primary');
            $alert.classList.add('alert-success');
            $alert.textContent = texto
        } else {
            $alert.textContent = texto
        }

    }
// estadoDeJuego('Perdiste :( vuelvelo a intentar!')
// estadoDeJuego('Ganaste! :D podes volver a jugar clickeando en empezar!')
