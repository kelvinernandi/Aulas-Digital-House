/*var nome = "Kelvin" //Hoje em dia não é mais usada

let nomeCompleto = "Kelvin Ernandi França"  //substituta do var
const pi = 3.14159265359 // usada para uma informação constante, que não pode ser alterada após

nomeCompleto = 'Xuxinha Jesus'


console.log(nome)
console.log(nomeCompleto)
console.log(pi) */

function adicionarHttp() {
    return "http://"
}

const sites = ["www.google.com","www.yahoo.com"]

function processar(sites, http){
    return adicionarHttp + sites
}


console.log(adicionarHttp() + sites[1])

