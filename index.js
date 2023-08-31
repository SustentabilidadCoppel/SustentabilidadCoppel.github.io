const cuestionario = document.getElementById("Calculadora");
const clean = document.getElementById("limpiar");
const corrida = document.getElementById("flujo");
const energetica = document.getElementById("energia");

cuestionario.addEventListener("click", candidatos);
clean.addEventListener("click", limpiar);
corrida.addEventListener("click", flujoFinanciero);
energetica.addEventListener("click", energia);

function limpiar(event){
    document.getElementById('Calculadora').reset();
}

function candidatos(event){
    //console.log({event}); para detener el reset es preventDefault.
    //event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const FDE = parseFloat(document.getElementById('FDE').value);
    const FDT = parseFloat(document.getElementById('FDT').value);
    const dolar = parseFloat(document.getElementById('dolar').value);
    const kwp = parseFloat(document.getElementById('kwp').value);
    const prestamos = ((parseFloat(document.getElementById('prestamos').value)+1)/100);
    const CC = parseFloat(document.getElementById('CC').value);
    const autocop = parseFloat(document.getElementById('autocop').value);
    const bruto = parseFloat(document.getElementById('bruto').value);
    const neto = parseFloat(document.getElementById('neto').value);
    const fecha = (document.getElementById('fecha').value);
    const directivo = document.getElementById('directivo');
    const FDTT = FDT - CC - autocop;
    let sfv = (kwp*dolar*1.2)*1.16;
    //var antiguedad = document.getElementById('fecha'); //por definir 
    //let mes = antiguedad.getMonth(); //por definir
   
    //fecha de ingreso
    const anio = parseInt(String(fecha).substring(0,4));
    const mes = parseInt(String(fecha).substring(5,7));
    
    //fecha en vida real
    let date = new Date();
    let yyyy = parseInt(date.getFullYear());
    let mm = parseInt(date.getMonth()+1);
    var antiguedad = 0;

    if ((mm-mes) <= 0){
        antiguedad = ((mm-mes)+(yyyy-anio)*12);
        console.log("meses pasados1: "+ antiguedad);

    }else if (mm-mes >0){
        antiguedad = ((mm-mes)+(yyyy-anio)*12);
        console.log("meses pasados2: "+ antiguedad);
    }

    if (directivo.checked){
        if (antiguedad<=12){
            var antiguedad = 0;
            var rendimientos = 0;
        } else if (antiguedad>12 & antiguedad <=60){
            var rendimientos = 0.08;
        } else if (antiguedad>60){
            var rendimientos = 0.13;
        }
    } else if (antiguedad<=12){
        var antiguedad = 0;
        var rendimientos =0;
    } else if (antiguedad>12 & antiguedad <=60){
        var rendimientos = 0.07;
    } else if (antiguedad>60 & antiguedad <=120){
        var rendimientos = 0.12;
    } else if (antiguedad>120){
        var rendimientos = 0.13;
    } else console.log("Error, no cae en ningun caso de antiguedad");

    console.log(rendimientos);


    if (sfv>= 0 & sfv <=25053){
        var prima = 696;
    }else if (sfv>=25053.1 & sfv <= 37759 ){
        var prima = 696;
    }else if (sfv>=37759.1 & sfv <= 50106 ){
        var prima = 696;
    }else if (sfv>=50106.1 & sfv <= 62632 ){
        var prima = 755.23;
    }else if (sfv>=62632.1 & sfv <= 75159){
        var prima = 900.53;
    }else if (sfv>=75159.1 & sfv <= 87685){
        var prima = 1045.84;
    }else if (sfv>=87685.1 & sfv <= 100211){
        var prima = 1191.15;
    }else if (sfv>=100211.1 & sfv <= 112738){
        var prima = 1336.45;
    }else if (sfv>=112738.1){
        var prima = 1481.76;
    } else alert("Ingresa un valor correcto");
    //console.log("prima es:" + prima);

    let subprestamo = sfv;
    //console.log("subprestamo es: " + subprestamo);
    var mensualidad = 0;
    
    if ((0.05*bruto)>(prestamos*subprestamo)){
        mensualidad = (0.05*bruto);
        var meses = Math.round((subprestamo/mensualidad));
        var periodo = Math.ceil(meses/12);
        var prestamo = (subprestamo+(prima*periodo))*0.9;
        var credito = Math.round((prestamo/mensualidad));
        
    } else var mensualidad = subprestamo*prestamos;
        var meses = Math.round((subprestamo/mensualidad));
        var periodo = Math.ceil(meses/12);
        var prestamo = (subprestamo+(prima*periodo))*0.9;
        var credito = Math.round((prestamo/mensualidad));
        //console.log("prestamo total: "+prestamo);

    //console.log("periodo en años es: "+periodo);
    //console.log("periodo en primas es: "+periodo*prima);
    
    if (FDTT >= prestamo){
        const subtotal=neto-mensualidad;
        if ((subtotal) > (bruto*0.4)){
            document.getElementById('resultado').innerText= "Felicidades "+ nombre.toUpperCase() +" tienes posibilidades de un prestamo de $"+ prestamo.toFixed(2) +" pesos, el tiempo de tu prestamo es de "+ credito +" meses aproximadamente, con una mensualidad de $"+ mensualidad.toFixed(2) +" pesos." ;
        } else document.getElementById('resultado').innerText= "Lo siento, " + nombre.toUpperCase() + " no cumples con los requisitos.";
    }
    else document.getElementById('resultado').innerText= "Lo siento, " + nombre.toUpperCase() + " no cumples con los requisitos.";
    //console.log(mensualidad);
    return 0;
}
  
function energia(event){
    
    const ene = Math.ceil(document.getElementById("dic").value/2);
    const feb = Math.ceil(document.getElementById("feb").value/2);
    const mar = Math.ceil(document.getElementById("feb").value/2);
    const abr = Math.ceil(document.getElementById("abr").value/2);
    const may = Math.ceil(document.getElementById("abr").value/2);
    const jun = Math.ceil(document.getElementById("jun").value/2);
    const jul = Math.ceil(document.getElementById("jun").value/2);
    const ago = Math.ceil(document.getElementById("ago").value/2);
    const sep = Math.ceil(document.getElementById("ago").value/2);
    const oct = Math.ceil(document.getElementById("oct").value/2);
    const nov = Math.ceil(document.getElementById("oct").value/2);
    const dic = Math.ceil(document.getElementById("dic").value/2);
    const kwp = document.getElementById("kwp").value/1000;

    
    var meses = [ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic];
    var dias = [31,28,31,30,31,30,31,31,30,31,30,31];
    var hsp = [5.55,6.06,7.13,7.08,7.11,6.69,6.02,5.83,5.85,6.38,5.79,5.23];

    var tarifaBase = [0.882,0.887,0.892,0.897,0.669,0.673,0.677,0.681,0.685,0.689,0.933,0.939];
    var tarifaInterbajo = [1.073,1.079,1.085,1.091,0.835,0.84,0.845,0.85,0.855,0.86,1.139,1.146];
    var tarifaInteralto = [0,0,0,0,2.032,2.044,2.056,2.068,2.08,2.092,0,0];
    var tarifaExcedente = [3.134,3.153,3.172,3.191,3.210,3.229,3.248,3.267,3.286,3.306,3.326,3.346];
    var factura = [];
    var facturaNormal = [];
    var nombreMeses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre", "Noviembre","Diciembre"];

    var totalsumado = 0;
    var totalsumado2 = 0;
    var totalsumado3 = 0;

    var totalsumadoNormal = 0;
    var totalsumado2Normal = 0;
    var totalsumado3Normal = 0;

    //ene-abr 3 ESCALONES DE TARIFAS
    for (i=0 ; i < 4 ; i++ ){
        console.log("ciclo 1,consumo del mes: "+ meses[i]);

    var eficiencia = 0.82;
    var generacion = (dias[i])*(hsp[i])*eficiencia*kwp;
    var facturacion = (meses[i])-generacion;
    var facturacionNormal = (meses[i]);
    var base =0;
    var interbajo = 0;
    var interalto = 0;
    var excedente = 0;
    var base1 =0;
    var interbajo1 = 0;
    var interalto1 = 0;
    var excedente1 = 0;
    
    //facturacion con paneles inicio
    if(facturacion>75){
        var base = 75*tarifaBase[i];
        if((facturacion-75)>125){
            var interbajo = 125*(tarifaInterbajo[i]);
              if ((facturacion-200)>0){
                  var excedente = ((facturacion-200)*tarifaExcedente[i])
                }else var excedente = 0
        }else if((facturacion-75)<0){
            var interbajo = 0;

        }else interbajo= (facturacion-75)*tarifaInterbajo[i]
    }else if (facturacion<25){
        base= 25*tarifaBase[i]
    } else base = facturacion*(tarifaBase[i]);

    var subtotal = base + interbajo + excedente;
    var total = Math.round(subtotal*1.16);
    //facturacion con paneles fin

    //facturacion normal inicio
    if(facturacionNormal>75){
        var base1 = 75*tarifaBase[i];
        if((facturacionNormal-75)>125){
            var interbajo1 = 125*(tarifaInterbajo[i]);
              if ((facturacionNormal-200)>0){
                  var excedente1 = ((facturacionNormal-200)*tarifaExcedente[i])
                }else var excedente1 = 0
        }else if((facturacionNormal-75)<0){
            var interbajo1 = 0;

        }else interbajo1= (facturacionNormal-75)*tarifaInterbajo[i]
    }else if (facturacionNormal<25){
        base1= 25*tarifaBase[i]
    } else base1 = facturacionNormal*(tarifaBase[i]);

    var subtotal1 = base1 + interbajo1 + excedente1;
    var totalNormal = Math.round(subtotal1*1.16);
    //facturacion normal fin

    console.log("generacion: "+ generacion);
    console.log("Pago con paneles: "+ facturacion);
    console.log("Pago sin paneles: "+ totalNormal);
    
   
    factura.push(total);
    facturaNormal.push(totalNormal);
    totalsumado = totalsumado + total;
    totalsumadoNormal = totalsumadoNormal + totalNormal;
    };
    console.log("-----Pago acumulado de: "+ totalsumadoNormal);


    //mayo-oct  4 ESCALONES DE TARIFAS
    for (i=4 ; i < 10 ; i++ ){
        console.log("ciclo 2, consumo del mes: "+ meses[i]);

    var eficiencia = 0.82;
    var generacion = (dias[i])*(hsp[i])*eficiencia*kwp;
    var facturacion = (meses[i])-generacion;
    var facturacionNormal = (meses[i]);
    var base =0;
    var interbajo = 0;
    var interalto = 0;
    var excedente = 0;
    var base1 =0;
    var interbajo1 = 0;
    var interalto1 = 0;
    var excedente1 = 0;
    
    //facturacion con paneles inicio
    if(facturacion>300){
        var base = 300*tarifaBase[i];
        if((facturacion-300)>900){
            var interbajo = 900*tarifaInterbajo[i];
            if ((facturacion-1200)>1300){
                var interalto = 1300*tarifaInteralto[i];
                if ((facturacion-2500)>0){
                    var excedente = ((facturacion-2500)*tarifaExcedente[i])
                }else var excedente = 0
            }else if ((facturacion-1200)<0){
                var interalto = 0;
            }else var interalto = ((facturacion-1200)*tarifaInteralto[i])


        }else if((facturacion-300)<0){
            var interbajo = 0;

        }else interbajo= (facturacion-300)*tarifaInterbajo[i]


    }else if (facturacion<25){
        base= 25*tarifaBase[i]
    } else base = facturacion*tarifaBase[i];

    var subtotal = base + interbajo + interalto + excedente;
    var total = Math.round(subtotal*1.16);
    //facturacion con paneles fin
    
    //facturacion normal inicio, el problema esta en excedentes
    if(facturacionNormal>300){
        var base1 = 300*tarifaBase[i];
        if((facturacionNormal-300)>900){
            var interbajo1 = 900*tarifaInterbajo[i];
            if ((facturacionNormal-1200)>1300){
                var interalto1 = 1300*tarifaInteralto[i];
                if ((facturacionNormal-2500)>0){
                    var excedente1 = ((facturacionNormal-2500)*tarifaExcedente[i])
                }else var excedente1 = 0
            }else if ((facturacionNormal-1200)<0){
                var interalto1 = 0;
            }else var interalto1 = ((facturacionNormal-1200)*tarifaInteralto[i])


        }else if((facturacionNormal-300)<0){
            var interbajo1 = 0;

        }else interbajo1= (facturacionNormal-300)*tarifaInterbajo[i]


    }else if (facturacionNormal<25){
        base1= 25*tarifaBase[i]
    } else base1 = facturacionNormal*tarifaBase[i];


    var subtotal1 = (base1 + interbajo1 + interalto1 + excedente1);
    var totalNormal = Math.round(subtotal1*1.16);
    //facturacion normal fin
    console.log("base sp:" + base1);
    console.log("interbajo sp:" +interbajo1);
    console.log("interalto sp:" +interalto1);
    console.log("exc sp:" +excedente1);
    console.log("subtotal sp:" +subtotal1);
    console.log("total sp:" +(1.16*(base1+interbajo1+interalto1+excedente1)))

    console.log("generacion: "+ generacion);
    console.log("Pago con paneles: "+ facturacion);
    console.log("Pago sin paneles: "+ totalNormal);


    factura.push(total);
    totalsumado2 = totalsumado2 + total;
    facturaNormal.push(totalNormal);
    totalsumado2Normal = totalsumado2Normal + totalNormal;
    };
    console.log("-----Pago acumulado de: "+ totalsumado2Normal);
    //nov-dic 3 ESCALONES DE TARIFAS
    for (i=10 ; i < 12 ; i++ ){
        console.log("ciclo 3, consumo del mes: "+ meses[i]);

    var eficiencia = 0.82;
    var generacion = (dias[i])*(hsp[i])*eficiencia*kwp;
    var facturacion = (meses[i])-generacion;
    var facturacionNormal = (meses[i]);
    var base =0;
    var interbajo = 0;
    var interalto = 0;
    var excedente = 0;
    
    //facturacion con paneles inicio
    if(facturacion>75){
        var base = 75*tarifaBase[i];
        if((facturacion-75)>125){
            var interbajo = 125*(tarifaInterbajo[i]);
              if ((facturacion-200)>0){
                  var excedente = ((facturacion-200)*tarifaExcedente[i])
                }else var excedente = 0
        }else if((facturacion-75)<0){
            var interbajo = 0;

        }else interbajo= (facturacion-75)*tarifaInterbajo[i]
    }else if (facturacion<25){
        base= 25*tarifaBase[i]
    } else base = facturacion*(tarifaBase[i]);

    var subtotal = base + interbajo + excedente;
    var total = Math.round(subtotal*1.16);
    //facturacion con paneles fin

    //facturacion normal inicio
    if(facturacionNormal>75){
        var base1 = 75*tarifaBase[i];
        if((facturacionNormal-75)>125){
            var interbajo1 = 125*(tarifaInterbajo[i]);
              if ((facturacionNormal-200)>0){
                  var excedente1 = ((facturacionNormal-200)*tarifaExcedente[i])
                }else var excedente1 = 0
        }else if((facturacionNormal-75)<0){
            var interbajo1 = 0;

        }else interbajo1= (facturacionNormal-75)*tarifaInterbajo[i]
    }else if (facturacionNormal<25){
        base1= 25*tarifaBase[i]
    } else base1 = facturacionNormal*(tarifaBase[i]);

    var subtotal1 = base1 + interbajo1 + excedente1;
    var totalNormal = Math.round(subtotal1*1.16);
    //facturacion normal fin
    
    console.log("energia facturada: "+ facturacion);
    console.log("Pago de: " + total);
    factura.push(total);
    facturaNormal.push(totalNormal);
    totalsumado3 = totalsumado3 + total;
    totalsumado3Normal = totalsumado3Normal + totalNormal;
    };
    console.log("-----Pago acumulado de: "+ totalsumado3Normal);

console.log("total sumado: "+ totalsumado);
console.log("total sumado2: "+ totalsumado2);
console.log("total sumado3: "+ totalsumado3);
console.log("total sumadoGLOBAL: "+ (totalsumado + totalsumado2 + totalsumado3) );
console.log(factura);
console.log("total sumado: "+ totalsumadoNormal);
console.log("total sumado2: "+ totalsumado2Normal);
console.log("total sumado3: "+ totalsumado3Normal);
console.log("total sumadoGLOBAL: "+ (totalsumadoNormal + totalsumado2Normal + totalsumado3Normal) );
console.log(facturaNormal);
//grafica en canvas por JS 
const ctx = document.getElementById("myChart");
const names = nombreMeses;
const facturaGrafica = factura;
const facturaNormalGrafica = facturaNormal;


let myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: names,
        datasets: [{
            label: 'Pago mensual con paneles',
            data: facturaGrafica,
            backgroundColor:[
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)',
                'rgba(35,91,78, 0.2)'
            ],
            borderColor: [
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)',
                'rgba(35,91,78, 1)'  
            ],
            borderWidth: 2
        },
        {
            label: 'Pago mensual sin paneles',
            data: facturaNormalGrafica,
            backgroundColor:[
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)',
                'rgba(157,36,73, 0.2)'
            ],
            borderColor: [
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)',
                'rgba(157,36,73, 1)'  
            ],
            borderWidth: 2
        }
    ]
    }
})


}


function flujoFinanciero(event){
        var nombre = document.getElementById('nombre').value;
        var FDE = parseFloat(document.getElementById('FDE').value);
        var FDT = parseFloat(document.getElementById('FDT').value);
        var dolar = parseFloat(document.getElementById('dolar').value);
        var kwp = parseFloat(document.getElementById('kwp').value);
        var prestamos = ((parseFloat(document.getElementById('prestamos').value)+1)/100);
        var CC = parseFloat(document.getElementById('CC').value);
        var autocop = parseFloat(document.getElementById('autocop').value);
        var bruto = parseFloat(document.getElementById('bruto').value);
        var neto = parseFloat(document.getElementById('neto').value);
        var fecha = (document.getElementById('fecha').value);
        var directivo = document.getElementById('directivo');
        var cetes = 0.1107;
        //var cetes = parseFloat(document.getElementById('cetes').value)/100;
        var FDTT = FDT - CC - autocop;
        let sfv = (kwp*dolar*1.2)*1.16;
        //var antiguedad = document.getElementById('fecha'); //por definir 
        //let mes = antiguedad.getMonth(); //por definir
       
        //fecha de ingreso
        const anio = parseInt(String(fecha).substring(0,4));
        const mes = parseInt(String(fecha).substring(5,7));
        
        //fecha en vida real
        let date = new Date();
        let yyyy = parseInt(date.getFullYear());
        let mm = parseInt(date.getMonth()+1);
        var antiguedad = 0;
    
        if ((mm-mes) <= 0){
            antiguedad = ((mm-mes)+(yyyy-anio)*12);
            console.log("meses pasados1: "+ antiguedad);
    
        }else if (mm-mes >0){
            antiguedad = ((mm-mes)+(yyyy-anio)*12);
            console.log("meses pasados2: "+ antiguedad);
        }
    
        if (directivo.checked){
            if (antiguedad<=12){
                var antiguedad = 0;
                var rendimientos = 0;
            } else if (antiguedad>12 & antiguedad <=60){
                var rendimientos = 0.08;
            } else if (antiguedad>60){
                var rendimientos = 0.13;
            }
        } else if (antiguedad<=12){
            var antiguedad = 0;
            var rendimientos =0;
        } else if (antiguedad>12 & antiguedad <=60){
            var rendimientos = 0.07;
        } else if (antiguedad>60 & antiguedad <=120){
            var rendimientos = 0.12;
        } else if (antiguedad>120){
            var rendimientos = 0.13;
        } else console.log("Error, no cae en ningun caso de antiguedad");
    
        console.log(rendimientos);
    
    
        if (sfv>= 0 & sfv <=25053){
            var prima = 696;
        }else if (sfv>=25053.1 & sfv <= 37759 ){
            var prima = 696;
        }else if (sfv>=37759.1 & sfv <= 50106 ){
            var prima = 696;
        }else if (sfv>=50106.1 & sfv <= 62632 ){
            var prima = 755.23;
        }else if (sfv>=62632.1 & sfv <= 75159){
            var prima = 900.53;
        }else if (sfv>=75159.1 & sfv <= 87685){
            var prima = 1045.84;
        }else if (sfv>=87685.1 & sfv <= 100211){
            var prima = 1191.15;
        }else if (sfv>=100211.1 & sfv <= 112738){
            var prima = 1336.45;
        }else if (sfv>=112738.1){
            var prima = 1481.76;
        } else alert("Ingresa un valor correcto");
        //console.log("prima es:" + prima);
    
        let subprestamo = sfv;
        //console.log("subprestamo es: " + subprestamo);
        var mensualidad = 0;
        
        if ((0.05*bruto)>(prestamos*subprestamo)){
            mensualidad = (0.05*bruto);
            var meses = Math.round((subprestamo/mensualidad));
            var periodo = Math.ceil(meses/12);
            var prestamo = (subprestamo+(prima*periodo))*0.9;
            var credito = Math.round((prestamo/mensualidad));
            
        } else var mensualidad = subprestamo*prestamos;
        var meses = Math.round((subprestamo/mensualidad));
        var periodo = Math.ceil(meses/12);
        var prestamo = (subprestamo+(prima*periodo))*0.9;
        var credito = Math.round((prestamo/mensualidad)+2);
        //console.log("prestamo total: "+prestamo);
        var deuda = prestamo;
        console.log(FDE);
        console.log(FDT);
        console.log(rendimientos);
        console.log(prestamo);
        console.log(deuda);
        console.log(mensualidad);
        var m =0;
        var pagos = 0;
        FDT = FDT - deuda;
        console.log(FDE)
        i = deuda

        while ( (FDE-FDT)> mensualidad ){
            console.log("mes "+ m + ": deuda: "+ i.toFixed(2) +" FDE:"+FDE.toFixed(2)+" FDT:"+ FDT.toFixed(2) + " Pagos: " +pagos.toFixed(2))
            lista = "mes "+ m + ": deuda: "+ i.toFixed(2) +"----FDE:"+FDE.toFixed(2)+"----FDT:"+ FDT.toFixed(2) + "   Pagos: " +pagos.toFixed(2) + "<br>"
            document.getElementById('corridaFinanciera').insertAdjacentHTML("beforeend",lista)
            
            m= m+1
            
            pagos = pagos + mensualidad
            FDT = FDT  + mensualidad + ((cetes*FDT)/12) + (bruto*rendimientos)
            FDE = FDE + ((cetes*FDE)/12) + (bruto*rendimientos)
            i = i - mensualidad
            if (i < mensualidad){
                    i = FDE-FDT
                    if (i<mensualidad){
                        console.log("final 2")

                        mensualidad = i 
                        pagos = pagos + mensualidad
                        FDT = FDT  + mensualidad + ((cetes*FDT)/12) + (bruto*rendimientos)
                        FDE = FDE + ((cetes*FDE)/12) + (bruto*rendimientos)
                        lista = "mes "+ m + ": deuda: "+ i.toFixed(2) +"----FDE:"+FDE.toFixed(2)+"----FDT:"+ FDT.toFixed(2) + "   Pagos: " +pagos.toFixed(2) + "<br>"
                        document.getElementById('corridaFinanciera').insertAdjacentHTML("beforeend",lista)
                    }else mensualidad=mensualidad
            }else mensualidad = mensualidad

        }
}
    
 
