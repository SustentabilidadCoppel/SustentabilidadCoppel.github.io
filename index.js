resultado = document.getElementById("resultado").value

const form = document.getElementById("Calculadora")
const clean = document.getElementById("limpiar")
form.addEventListener("click", Evaluar)
clean.addEventListener("click", limpiar)

function limpiar(event){
    document.getElementById('Calculadora').reset();
}

function Evaluar(event){
    //console.log({event}); para detener el reset es preventDefault.
    //event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const FDE = parseFloat(document.getElementById('FDE').value);
    const FDT = parseFloat(document.getElementById('FDT').value);
    const p = parseFloat(document.getElementById('prestamo').value);
    const CC = parseFloat(document.getElementById('CC').value);
    const autocop = parseFloat(document.getElementById('autocop').value);
    const bruto = parseFloat(document.getElementById('bruto').value);
    const neto = parseFloat(document.getElementById('neto').value);
    const FDTT = FDT - CC - autocop;
    if (FDTT >= p){
        if (neto > (bruto*0.4)){
            document.getElementById('resultado').innerHTML= "Felicidades "+ nombre +" tienes posibilidades para ser candidato.";
        } 
    }
    else document.getElementById('resultado').innerHTML= "Lo siento, " + nombre.toUpperCase() + " no cumples con los requisitos.";
    return 0;
}






