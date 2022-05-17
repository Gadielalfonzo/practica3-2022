function seleccion(){
    const operacion= document.getElementById("slt_operacion").value
    let resultado=null
    if ( operacion == 0 ){
        //Si el vehículo a la venta es un Ford Fiesta, el descuento es de un 5%
        resultado=3900000-(3900000*0.05)
    }else{
        if (operacion == 1){
            //Si el vehículo a la venta es un Ford focus, el descuento es del 10%
            resultado=3350000-(3350000*0.10)
        }else{
            //Si se trata de un Ford Ka, el descuento es de un 15%
            resultado=2900000-(2900000*0.15)
        }
    }
    document.getElementById("h_resultado").textContent ='el total es: '+ resultado
}