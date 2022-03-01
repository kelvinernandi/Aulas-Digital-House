//Diferentes jeitos de declarar uma função

/* function digaOla() {
    return 'Olá'
}

const digaOla = function() {
    return "Olá"
}


const digaOla = () => 'Olá'  */

let horaAtual = () => {
    let data = new Date();
    return 'Hora:' + data.getHours() + ':' + data.getMinutes() + ' Dia:' + data.getDate();
}



console.log(horaAtual())